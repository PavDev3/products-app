import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  items = this.cartService.getItems(); // Define la propiedad items para almacenar los productos en el carrito.

  constructor(
    private cartService: CartService // Inyecta el servicio CartService en el constructor (private cartService: CartService).
  ) { }

}
