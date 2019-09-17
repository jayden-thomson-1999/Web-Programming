import { Injectable } from '@angular/core';
import { Products } from '../products';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductDataServiceService {
  private domain = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  add(product: Products) {
    return this.http.post<any>(this.domain + '/api/add', product);
  }

  getList() {
    return this.http.get<any>(this.domain + '/api/getlist');
  }

  getItem(productID) {
    return this.http.post<any>(this.domain + '/api/getitem', {productid: productID});
  }

  updateItem(product: Products) {
    return this.http.post<any>(this.domain + '/api/update', product);
  }

  deleteItem(productID) {
    return this.http.post<any>(this.domain + '/api/deleteitem', {productid: productID});
  }

  checkValidID(productID) {
    return this.http.post<any>(this.domain + '/api/checkvalidid', {id: productID});
  }

  getProductCount() {
    return this.http.get<any>(this.domain + '/api/productcount');
  }
}
