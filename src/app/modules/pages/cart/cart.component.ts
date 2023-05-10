import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { Customer, Representative } from '../interfaces/customer';
import { Product } from '../interfaces/product';
import { Table } from 'primeng/table';
import { ProductService } from 'src/app/shared/services/product.service';
import { CartService } from '../services/cart.service';

interface expandedRows {
  [key: string]: boolean;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  customers1: Customer[] = [
    {
      id: 1000,
      name: "James Butt",
      country: {
        name: "Algeria",
        code: "dz"
      },
      company: "Benton, John B Jr",
      date: "2015-09-13",
      status: "unqualified",
      verified: true,
      activity: 17,
      representative: {
        name: "Ioni Bowcher",
        image: "ionibowcher.png"
      },
      balance: 70663
    },
    {
      id: 1001,
      name: "Josephine Darakjy",
      country: {
        name: "Egypt",
        code: "eg"
      },
      company: "Chanay, Jeffrey A Esq",
      date: "2019-02-09",
      status: "proposal",
      verified: true,
      activity: 0,
      representative: {
        name: "Amy Elsner",
        image: "amyelsner.png"
      },
      balance: 82429
    },


  ];

  value = 1;


  selectedCustomers1: Customer[] = [];

  selectedCustomer: Customer = {};

  representatives: Representative[] = [];

  statuses: any[] = [];

  products: Product[] = [];

  rowGroupMetadata: any;

  expandedRows: expandedRows = {};

  activityValues: number[] = [0, 100];

  isExpanded: boolean = false;

  idFrozen: boolean = false;

  loading: boolean = true;

  @ViewChild('filter') filter!: ElementRef;

  productos: Product [] = [];
 
  totalGeneralPrice:number = 0;
  subTotalPrice : number = 0;

  cartSer = inject(CartService);


  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
      this.productos.forEach(customer => customer.created_at = new Date(customer.created_at!));
    }, 500);
    
    this.getCarritoDetalle();
    this.totalGeneral();
  }

  onSort() {
    this.updateRowGroupMetaData();
  }

  updateRowGroupMetaData() {
    this.rowGroupMetadata = {};

    /* if (this.customers3) {
        for (let i = 0; i < this.customers3.length; i++) {
            const rowData = this.customers3[i];
            const representativeName = rowData?.representative?.name || '';

            if (i === 0) {
                this.rowGroupMetadata[representativeName] = { index: 0, size: 1 };
            }
            else {
                const previousRowData = this.customers3[i - 1];
                const previousRowGroup = previousRowData?.representative?.name;
                if (representativeName === previousRowGroup) {
                    this.rowGroupMetadata[representativeName].size++;
                }
                else {
                    this.rowGroupMetadata[representativeName] = { index: i, size: 1 };
                }
            }
        }
    } */
  }

  formatCurrency(value: number) {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
  }

  getCarritoDetalle(){
    this.cartSer.currentDataCart$.subscribe( listProd => { this.productos = listProd; });
  }
  
  totalGeneral(){
    this.cartSer.totalGeneralPrice$.subscribe( totalGeneral => {  this.totalGeneralPrice = totalGeneral; console.log('total general',this.totalGeneralPrice); });
  }

  removeProduct(producto:Product){
    this.cartSer.removeElementCart(producto);
  }

  actualizarCantidad(cantidad: number,producto: Product) {      
    if (cantidad > producto.quantity!) {
      this.cartSer.aumentarCantidad(producto);
    } else if (cantidad < producto.quantity!) {
      this.cartSer.disminuirCantidad(producto);
    }
  }

  onKeyDown(event: KeyboardEvent) {
    const allowedKeys = ['Enter', 'Delete', 'Backspace'];
    const inputElement = event.target as HTMLInputElement;

    if (!allowedKeys.includes(event.key)) {
      event.preventDefault();
    }

    // Restringir la entrada manual de texto
    inputElement.blur();
  }



 /*  aumentarCantidad(producto: Product){
    this.cartSer.aumentarCantidad(producto);
  }

  disminuirCantidad(producto: Product){
    this.cartSer.disminuirCantidad(producto);
  } */




}
