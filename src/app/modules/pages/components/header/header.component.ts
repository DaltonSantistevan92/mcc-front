import { Component, OnInit, ViewChild, ElementRef, inject } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from 'src/app/layout/layout.service';
import { Product } from '../../interfaces/product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  tieredItems: MenuItem[] = [];

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;


  productos: Product [] = [];
 
  totalQuantity:number = 0;
  
  layoutService = inject(LayoutService);
  cartSer = inject(CartService);


  ngOnInit() {
    this.tieredItems = [
      {
        label: 'Tienda',
        icon: 'pi pi-fw pi-home',
        routerLink : '/home'
      },
      {
        label: 'Galería',
        icon: 'pi pi-fw pi-images',
        routerLink : ''
      },
      /* {
        label: 'Shipments',
        icon: 'pi pi-fw pi-envelope',
        items: [
          {
            label: 'Tracker',
            icon: 'pi pi-fw pi-compass',
          },
          {
            label: 'Map',
            icon: 'pi pi-fw pi-map-marker',
          },
          {
            label: 'Manage',
            icon: 'pi pi-fw pi-pencil',
          },
        ],
      }, */
      {
        label: 'Nosotros',
        icon: 'pi pi-fw pi-info-circle',
        routerLink: '/about'
      },
      /* { separator: true },
      {
        label: 'Quit',
        icon: 'pi pi-fw pi-sign-out',
      }, */
    ];

    this.cantidad();
  }


  cantidad(){
    this.cartSer.currentDataCart$.subscribe( x => this.totalQuantity = x.length);
  }

}
