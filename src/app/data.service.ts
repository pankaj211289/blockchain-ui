import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  displayBlockchain() {
  	return this.http.get('http://localhost:9090/blockchain');
  }

  createNewWallet() {
  	return this.http.post('http://localhost:9090/createWallet', '');
  }

  loadWallet(walletDetails) {
  	return this.http.post('http://localhost:9090/loadWallet', walletDetails, {
       	headers: new HttpHeaders({
  			'Content-Type' : 'application/json',
  	 		'Accept': 'application/json'
  		  })
	  });
  }

  createNewTransaction(transaction) {
    return this.http.post('http://localhost:9090/addTransaction', transaction, {
         headers: new HttpHeaders({
        'Content-Type' : 'application/json',
         'Accept': 'application/json'
        })
    });
  }

  mineBlock() {
    return this.http.post('http://localhost:9090/mine', '');
  }
}


