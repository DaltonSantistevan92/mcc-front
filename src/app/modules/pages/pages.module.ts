import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { MenubarModule } from 'primeng/menubar';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ProfileComponent } from './profile/profile.component';
import { OrdersComponent } from './orders/orders.component';
import { AboutComponent } from './about/about.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterPageComponent } from './components/footer-page/footer-page.component';
import { PagesComponent } from './pages.component';


@NgModule({
  declarations: [
    HomeComponent,
    CartComponent,
    FavoritesComponent,
    ProfileComponent,
    OrdersComponent,
    AboutComponent,
    CheckoutComponent,
    HeaderComponent,
    FooterPageComponent,
    PagesComponent
  ],
  exports : [
    HeaderComponent,
    FooterPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MenubarModule,
    PagesRoutingModule,
    DataViewModule,
    InputTextModule,
    DropdownModule,
    RatingModule,
    ButtonModule
  ],
})
export class PagesModule { }
