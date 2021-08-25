import { ProductService } from './../../service/product.service';
import { Product } from './../../model/product.model';
import { AllServiceService } from './../../service/all-service.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

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



    // dellete a product
    deleteProduct(id:any) {
      Swal.fire({
        text: 'Are you sure you want to remove this Product?',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it',
      }).then((result) => {

        if (result.isConfirmed) {
          this.pdtSer.deleteProduct(id).subscribe(res => {
          this.products = this.products.filter(item => item.id !== id);
             this.getProducts();
            });
            Swal.fire({
              text: 'Oops You lost this Product',
              timer: 1000,
              showCancelButton: false,
              showConfirmButton: false
            }).then(
              function () { },
              function(dismiss) {
                if (dismiss === 'timer') {
                }
              }
            );
        }
        else if (result.isDismissed) {
          console.log('Clicked No, File is safe!');
        }
      });
    }


}
