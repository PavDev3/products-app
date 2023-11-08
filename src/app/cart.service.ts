import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  addToCart(product: Product) { // Este método agrega un producto al carrito.
    this.items.push(product);
  }

  getItems() { // Este método recupera los productos que se agregaron al carrito.
    return this.items;
  }

  clearCart() { // Este método vacía la lista de productos que se encuentran en el carrito.
    this.items = [];
    return this.items;
  }

  constructor() { }
}
