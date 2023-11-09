import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  items = this.cartService.getItems(); // Define la propiedad items para almacenar los productos en el carrito.

  checkoutForm = this.formBuilder.group({ // Define la propiedad checkoutForm para almacenar el modelo del formulario.
    name: '',
    address: ''
  });

  constructor(
    private cartService: CartService, // Inyecta el servicio CartService en el constructor (private cartService: CartService).
    private formBuilder: FormBuilder, // Inyecta el servicio FormBuilder en el constructor (private formBuilder: FormBuilder).
  ) { }

  onSubmit(): void { // Define el método onSubmit() que procesa los datos del formulario.
    this.items = this.cartService.clearCart(); // Procesa los datos del formulario.
    console.warn('Your order has been submitted', this.checkoutForm.value); // Muestra un mensaje de "Your order has been submitted" con los datos del formulario.
    this.checkoutForm.reset(); // Limpia el formulario.
  }
}
