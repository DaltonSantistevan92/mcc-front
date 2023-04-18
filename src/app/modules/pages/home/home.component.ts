import { Component, OnInit, inject } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { DataView } from 'primeng/dataview';
import { Product } from '../interfaces/product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  sortOptions: SelectItem[] = [];

  sortOrder: number = 0;

  sortField: string = '';

  products : Product [] = [];
  _ps = inject(ProductService);


  ngOnInit(): void {
    this.sortOptions = [
        { label: 'Precio Alto a Bajo', value: '!precio_venta' },
        { label: 'Pricio Bajo a Alto', value: 'precio_venta' }
    ];

	this.getProd();
  }

  getProd(){
	this._ps.getProduct().subscribe({
		next : (resp) => { console.log(resp); this.products = resp; },
		error : (err) => {  console.log(err) }
	});

  }

  onSortChange(event: any) {
    const value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    } else {
        this.sortOrder = 1;
        this.sortField = value;
    }
}

onFilter(dv: DataView, event: Event) {
    dv.filter((event.target as HTMLInputElement).value);
}

}
