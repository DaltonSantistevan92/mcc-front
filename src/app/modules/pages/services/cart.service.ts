import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart = new BehaviorSubject<Array<Product>>([]);
  public currentDataCart$ = this.cart.asObservable();

  private totalPriceSubject = new BehaviorSubject<number>(0);
  totalGeneralPrice$ = this.totalPriceSubject.asObservable();

  private get getListCart(): Product[] {
    return this.cart.getValue();
  }

  constructor() {
    // Cargar el carrito almacenado en el localStorage
    this.loadCartFromLocalStorage();
  }

  private saveCartToLocalStorage(getListCart: Product[]) {
    localStorage.setItem('cart', JSON.stringify(getListCart));
  }

  private loadCartFromLocalStorage() {
    const cartData = localStorage.getItem('cart');

    if (cartData) {
      const cartItems: Product[] = JSON.parse(cartData);
      this.cart.next(cartItems);
      this.actualizarTotales(cartItems);
    }
  }
  
  changeCart(product: Product) {
    const objIndex = this.getListCart.findIndex((obj) => obj.id === product.id);

    if (objIndex !== -1) {
      this.getListCart[objIndex].quantity! += 1;
    } else {
      this.getListCart.push(product);
    }
    this.cart.next(this.getListCart);
    this.actualizarTotales(this.getListCart);
    this.saveCartToLocalStorage(this.getListCart);
  }

  removeElementCart(product:Product){
    const objIndex = this.getListCart.findIndex((obj => obj.id == product.id));
    
    if(objIndex != -1){
      this.getListCart[objIndex].quantity = 1;
      this.getListCart.splice(objIndex,1);
    }
    this.cart.next(this.getListCart);
    this.actualizarTotales(this.getListCart);
    this.saveCartToLocalStorage(this.getListCart);

  }

  actualizarTotales(productoActual: Product[]): void {
    this.totalPriceSubject.next(this.calcularTotalGeneral(productoActual));
  }

  calcularTotalGeneral(productoActual: Product[]): number {
    return productoActual.reduce((total, producto) => total + producto.quantity! * producto.precio_venta!, 0);
  }
  
  aumentarCantidad(producto: Product) {
    const productoEnCarrito = this.getListCart.find((p) => p.id === producto.id);
  
    if (productoEnCarrito) {
      productoEnCarrito.quantity!++;
    } 

    this.cart.next(this.getListCart);
    this.actualizarTotales(this.getListCart);
    this.saveCartToLocalStorage(this.getListCart);
  }
  
  disminuirCantidad(producto: Product) {
    const productoEnCarrito = this.getListCart.find((p) => p.id === producto.id);

    if (productoEnCarrito && productoEnCarrito.quantity! > 0) {
      productoEnCarrito.quantity!--;
    }
    this.cart.next(this.getListCart);
    this.actualizarTotales(this.getListCart);
    this.saveCartToLocalStorage(this.getListCart);
  }

  



}
