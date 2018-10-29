import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-new-wallet',
  templateUrl: './new-wallet.component.html',
  styleUrls: ['./new-wallet.component.scss']
})
export class NewWalletComponent implements OnInit {

  newWallet: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  createNewWallet() {
  	this.data.createNewWallet().subscribe(data => {
  		this.newWallet = data
  		console.log(this.newWallet)
  	});
  }

  copyInputMessage(inputElement){
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }
}
