import { ProductListComponent } from './../admin/product-list/product-list.component';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import {  Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { map } from 'rxjs/operators'
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = "http://localhost:3000/products/";

  constructor(
    private http: HttpClient
  ) { }

  postProduct(data: any){
    return this.http.post<any>(this.baseUrl, data)
    .pipe(map((res:any) => {
      return res
    }))
  }

  getProduct(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  updateProduct(data: any, id:any){
    return this.http.put<Product[]>(this.baseUrl+id, data)
    .pipe(map((res:any) => {
      return res
    }))
  }

  deleteProduct(id: any){
    return this.http.delete<Product[]>(this.baseUrl+id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  create(data:any): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, JSON.stringify(data))
    .pipe(
      catchError(this.errorHandler)
    )
  }

  createProd(prod:any){
    return this.http.post(this.baseUrl,prod)
  }

  update(id:any, data:any): Observable<Product[]> {
    return this.http.put<Product[]>(this.baseUrl , JSON.stringify(data))
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error: any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }

}
