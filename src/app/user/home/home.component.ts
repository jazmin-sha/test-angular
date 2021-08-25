import { ProductService } from './../../service/product.service';
import { Product } from './../../model/product.model';
import { AllServiceService } from './../../service/all-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[] = []

  constructor(
    private service: AllServiceService,
    private pdtSer: ProductService
  ) { }

  ngOnInit(): void {
    this.getProducts();

}

// get products
  getProducts(){
    this.pdtSer.getProduct().subscribe((data: Product[])=>{
      this.products = data;
      console.log(this.products);
    })
  }

}
