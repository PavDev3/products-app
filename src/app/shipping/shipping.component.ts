import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit{

  shippingCosts!: Observable<{type: string, price: number}[]>; // Define la propiedad shippingCosts para almacenar los precios de envío.
  
  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices()// // Obtén y almacena los precios de envío usando el servicio 'CartService'..
  }

  constructor
(private cartService: CartService){ // Inyecta el servicio CartService en el constructor (private cartService: CartService).
  }
}
