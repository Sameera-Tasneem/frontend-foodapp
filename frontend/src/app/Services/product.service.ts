import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  add(data:any) {
    return this.httpClient.post(this.url +"/product/add", data);
  }

  updateProduct(data:any) {
    return this.httpClient.post(this.url +"/product/update", data);
  }

  getProduct() {
    return this.httpClient.get(this.url +"/product/get");
  }

  updateStatus(data:any) {
    return this.httpClient.post(this.url +"/product/updateStatus", data);
  }

  deleteProduct(id:any) {
    return this.httpClient.delete(this.url +"/product/delete/" +id);
  }

  getProductByCategory(id:any){
    return this.httpClient.get(this.url + "/product/getByCategory/" + id);
  }

  getProductById(id:any){
    return this.httpClient.get(this.url + "/product/getById/" + id);
  }

}
