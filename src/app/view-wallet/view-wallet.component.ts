import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Wallet } from './wallet';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-view-wallet',
  templateUrl: './view-wallet.component.html',
  styleUrls: ['./view-wallet.component.scss']
})
export class ViewWalletComponent implements OnInit {

  walletDetails: Object;
  wallet: Wallet;
  pKeyValue = ""
  prKeyValue = ""

  constructor(private data: DataService) { 
  	this.wallet = new Wallet();
  }

  ngOnInit() {
  }

  submitWalletDetails(pKey, prKey){
    this.wallet.publicKey = this.pKeyValue;
    this.wallet.privateKey = this.prKeyValue;

    console.log(JSON.stringify(this.wallet))

	this.data.loadWallet(this.wallet).subscribe(data => {
  		this.walletDetails = data
  		console.log(this.walletDetails)
  	});
  }


}
