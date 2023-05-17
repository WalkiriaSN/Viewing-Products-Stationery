import { Injectable } from '@angular/core';
import { Iproduct } from '../interfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

products:Iproduct[] = [
  {item: "Letter Set", category: "Stationery"},
  {item: "Pen Set", category: "Stationery"},
  {item: "Paper Clips", category: "Stationery"}
];

  constructor() { }
}
