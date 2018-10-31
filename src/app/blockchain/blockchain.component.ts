import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-blockchain',
  templateUrl: './blockchain.component.html',
  styleUrls: ['./blockchain.component.scss']
})
export class BlockchainComponent implements OnInit {

  blockchain: Object;
  showSuccessAlert: boolean = false;

  constructor(private data: DataService) { }

  ngOnInit() {

  	this.data.displayBlockchain().subscribe(data => {
  		this.blockchain = data
  		console.log(this.blockchain)
  	});
  }

  mineBlock() {
    this.data.mineBlock().subscribe(data => {
      this.showSuccessAlert = true;
      
      this.data.displayBlockchain().subscribe(data => {
        this.blockchain = data
        console.log(this.blockchain)
      });
    });
  }

  switchBool(showSuccessAlert) {
    this.showSuccessAlert = !showSuccessAlert;
  }
}
