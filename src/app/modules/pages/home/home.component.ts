import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { DataView } from 'primeng/dataview';

interface InventoryStatus {
  label: string;
  value: string;
}

export interface Product {
  id?: string | number;
  code?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  inventoryStatus: InventoryStatus | string;
  category?: string;
  image?: string;
  rating?: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Product[] = [
		{
			id : 1000,
			code : "f230fh0g3",
			name: "burro Watch",
			description: "Product Description",
			image: "macaco.svg",
			price: 75,
			category: "Accessories",
			quantity: 24,
			inventoryStatus: "INSTOCK",
			rating: 5
		},
    {
			id : 1000,
			code : "f230fh0g3",
			name: "Bamboo Watch",
			description: "Product Description",
			image: "bamboo-watch.jpg",
			price: 165,
			category: "Accessories",
			quantity: 24,
			inventoryStatus: "INSTOCK",
			rating: 5
		},{
			id : 1000,
			code : "f230fh0g3",
			name: "Bamboo Watch",
			description: "Product Description",
			image: "bamboo-watch.jpg",
			price: 65,
			category: "Accessories",
			quantity: 24,
			inventoryStatus: "INSTOCK",
			rating: 5
		},{
			id : 1000,
			code : "f230fh0g3",
			name: "Bamboo Watch",
			description: "Product Description",
			image: "bamboo-watch.jpg",
			price: 65,
			category: "Accessories",
			quantity: 24,
			inventoryStatus: "INSTOCK",
			rating: 5
		},{
			id : 1000,
			code : "f230fh0g3",
			name: "Bamboo Watch",
			description: "Product Description",
			image: "bamboo-watch.jpg",
			price: 65,
			category: "Accessories",
			quantity: 24,
			inventoryStatus: "INSTOCK",
			rating: 5
		},
  ];

  sortOptions: SelectItem[] = [];

  sortOrder: number = 0;

  sortField: string = '';

  sourceCities: any[] = [];

  targetCities: any[] = [];

  orderCities: any[] = [];



  constructor() { }

  ngOnInit(): void {
    this.sortOptions = [
        { label: 'Precio Alto a Bajo', value: '!price' },
        { label: 'Pricio Bajo a Alto', value: 'price' }
    ];
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
