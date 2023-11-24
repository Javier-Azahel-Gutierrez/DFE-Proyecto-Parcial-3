import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private API_URL = 'https://6561000083aba11d99d1ce0e.mockapi.io/api/';

  constructor(private http: HttpClient) { }
  
  public getAll(route: string) {
    
    return this.http.get(this.API_URL + route);
  }
}
