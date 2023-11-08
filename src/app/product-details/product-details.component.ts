import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined; // Aquí se declara una variable llamada 'product' que almacenará los detalles del producto.

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
  // Este método agrega un producto al carrito.

  constructor(
    private route: ActivatedRoute,     
    // Este es el constructor de la clase ProductDetailsComponent.
    // El constructor se encarga de inyectar una dependencia llamada 'route' (es como darle un juguete especial al componente).
    private cartService: CartService
    // Este es el constructor de la clase ProductDetailsComponent.
    // El constructor se encarga de inyectar una dependencia llamada 'cartService' (es como darle un juguete especial al componente).
    )
    
    {
  }

  ngOnInit() {
    // Este método se llama cuando el componente se inicializa.
    // Es como preparar todo antes de mostrar la página.



    const routeParams = this.route.snapshot.paramMap;
    // Aquí obtienes información sobre la URL actual, como una dirección en un mapa.

    const productIdFromRoute = Number(routeParams.get('productId'));
    // Esto toma un número de la URL (por ejemplo, el número de identificación del producto que deseas mostrar).

    // Ahora, vamos a buscar el producto correcto en una lista de productos.
    this.product = products.find(product => product.id === productIdFromRoute);
    // Aquí, buscas en una lista de productos el que coincida con el número de identificación obtenido de la URL.
  }
}


