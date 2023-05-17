import { Component } from '@angular/core';
import { Iproduct } from './interfaces/iproduct';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products:Iproduct[];


  constructor(private productService:ProductsService){
  this.products = productService.products;
  }

}
