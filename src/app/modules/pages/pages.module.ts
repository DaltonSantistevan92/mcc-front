import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { MenubarModule } from 'primeng/menubar';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { BadgeModule } from 'primeng/badge';

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

//card
import { TableModule } from 'primeng/table';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { RippleModule } from 'primeng/ripple';
import { MultiSelectModule } from 'primeng/multiselect';

import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { SliderModule } from 'primeng/slider';
import { InputNumberModule } from 'primeng/inputnumber';
import { IsLoginDirective } from 'src/app/directives/is-login.directive';
import { LinkLoginComponent } from './components/link-login/link-login.component';

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
    PagesComponent,
    IsLoginDirective,
    LinkLoginComponent
  ],
  exports : [
    HeaderComponent,
    FooterPageComponent,
    LinkLoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MenubarModule,
    PagesRoutingModule,
    DataViewModule,
    BadgeModule,
    InputTextModule,
    DropdownModule,
    RatingModule,
    ButtonModule,
    //card
    TableModule,
    ToggleButtonModule,
    RippleModule,
    MultiSelectModule,
    ProgressBarModule,
    ToastModule,
    SliderModule,
    InputNumberModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PagesModule { }
