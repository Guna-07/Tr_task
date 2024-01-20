import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class DbproductsService {
  private url= 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any[]>{
      return this.http.get<any[]>(this.url);
  }

  postProducts(data: any): Observable<any[]>{
    return this.http.post<any>(this.url, data);
  }
}
