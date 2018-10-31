import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Wallet } from './wallet';
import { Transaction } from './Transaction';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-view-wallet',
  templateUrl: './view-wallet.component.html',
  styleUrls: ['./view-wallet.component.scss']
})
export class ViewWalletComponent implements OnInit {

  walletDetails: Object;
  transactionDetails: Object;
  wallet: Wallet;
  newTransaction : Transaction;
  showSuccessAlert: boolean = false;

  pKeyValue = "";
  prKeyValue = "";
  recipientValue = "";
  dataToRecipient = "";

  constructor(private data: DataService) { 
  	this.wallet = new Wallet();
  	this.newTransaction = new Transaction();
  }

  ngOnInit() {
  }

  submitWalletDetails() {
    this.wallet.publicKey = this.pKeyValue;
    this.wallet.privateKey = this.prKeyValue;

	this.data.loadWallet(this.wallet).subscribe(data => {
  		this.walletDetails = data
  		console.log(this.walletDetails)
  	});
  }

  createNewTransaction() {
  	this.newTransaction.recipient = this.recipientValue;
  	this.newTransaction.data = this.dataToRecipient;

  	this.data.createNewTransaction(this.newTransaction).subscribe(data => {
  		this.transactionDetails = data
  		console.log(this.transactionDetails)
  		this.showSuccessAlert = true;
  		this.recipientValue = "";
  		this.dataToRecipient = "";
  	});
  }

  switchBool(showSuccessAlert) {
  	this.showSuccessAlert = !showSuccessAlert;
  }
}
