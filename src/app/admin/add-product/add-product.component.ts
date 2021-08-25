import { ProductService } from './../../service/product.service';
import { Product } from './../../model/product.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  public addForm: FormGroup = Object.create(null);
  products = [];

  constructor(
    private FormBuilder: FormBuilder,
    private api: ProductService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.addForm = this.FormBuilder.group({
      productName: [''],
      productPrice: [''],
      productQuantity: [''],
      productCategory: ['']
    })
  }


  submit(){
    this.api.create(this.addForm.value).subscribe(res => {
      console.log('Post created successfully!');
      this.router.navigateByUrl('/admin/list-products');
      console.log(this.addForm.value);
    })
  }
}
