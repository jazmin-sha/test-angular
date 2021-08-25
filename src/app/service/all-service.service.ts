import { Product } from './../model/product.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllServiceService {

  products: Product[] = [
    {
      id: 1,
      productName: "abcd",
      productPrice: 234,
      productQuantity: 3,
      productCategory: "book",
    },
    {
      id: 2,
      productName: "abcd",
      productPrice: 234,
      productQuantity: 3,
      productCategory: "book",
    },
    {
      id: 3,
      productName: "abcd",
      productPrice: 234,
      productQuantity: 3,
      productCategory: "book",
    }
  ];

  constructor() { }


  doLogin(value: any){
    if(value.username == 'admin123@gmail.com' && value.password == 'admin123'){
      return true
    }else{
      return false
    }
  }

  onGet(){
    return this.products;
  }

}
