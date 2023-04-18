import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  webservice = environment.webservice;

  http = inject(HttpClient);

  getProduct(): Observable<any>{
    let url = `${this.webservice}/product`;
    return this.http.get<any>(url);
  }



}
