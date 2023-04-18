import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from 'src/app/layout/layout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  tieredItems: MenuItem[] = [];

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;

  constructor(public layoutService: LayoutService) {}

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
  }
}
