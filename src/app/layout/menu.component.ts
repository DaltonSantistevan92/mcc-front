import { Component, OnInit } from '@angular/core';
import { LayoutService } from './layout.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {

  model: any[] = [];

  constructor(public layoutService: LayoutService) { }

  ngOnInit() {
    this.model = [
      {
        label: 'Home',
        items: [
          { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
          { label: 'KPI', icon: 'pi pi-fw pi-chart-line', routerLink: ['/kpi'] }
        ]
      },
      {
        label: 'Administración',
        items: [
          { label: 'Productos', icon: 'pi pi-fw pi-th-large', routerLink: ['/uikit/formlayout'] },
          { label: 'Categorías', icon: 'pi pi-fw pi-box', routerLink: ['/uikit/input'] },
          { label: 'Clientes', icon: 'pi pi-fw pi-users', routerLink: ['/uikit/floatlabel'] },
          { label: 'Pedidos', icon: 'pi pi-fw pi-shopping-bag', routerLink: ['/uikit/invalidstate'] },
        ]
      },
      {
        label: 'Seguridad',
        items: [
          { label: 'Usuarios', icon: 'pi pi-fw pi-users', routerLink: ['/blocks'] },
          { label: 'Permisos', icon: 'pi pi-fw pi-shield', routerLink: ['/blocks'] },
        ]
      },
    ];
  }
}