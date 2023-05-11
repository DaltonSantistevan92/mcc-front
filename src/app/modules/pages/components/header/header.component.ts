import { Component, OnInit, ViewChild, ElementRef, inject, ChangeDetectorRef } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from 'src/app/layout/layout.service';
import { Product } from '../../interfaces/product';
import { CartService } from '../../services/cart.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { timeout } from 'rxjs';

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

  isLogin : boolean = true;
  
  layoutService = inject(LayoutService);
  cartSer = inject(CartService);
  authSer = inject(AuthService);
  showDialog: boolean = false;
  changeDetector = inject(ChangeDetectorRef);

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

  confirmExit(){
    this.showDialog = false;
    this.isLogin = false;
    this.changeDetector.detectChanges();
    this.authSer.logout();
  }

}
