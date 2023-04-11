import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './sidebar.component';
import { TopbarComponent } from './topbar.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu.component';
import { MenuitemComponent } from './menuitem.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarModule } from 'primeng/sidebar';
import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    MenuComponent,
    MenuitemComponent,
    TopbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    SidebarModule,
    RouterModule
  ]
})
export class LayoutModule { }
