import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  displayBlockchain() {
  	return this.http.get('http://localhost:9090/blockchain');
  }
}
