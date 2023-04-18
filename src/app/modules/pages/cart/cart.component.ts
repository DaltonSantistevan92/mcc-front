import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Customer, Representative } from '../interfaces/customer';
import { Product } from '../interfaces/product';
import { Table } from 'primeng/table';

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

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
      // @ts-ignore
      this.customers1.forEach(customer => customer.date = new Date(customer.date));
    }, 500);    
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

}
