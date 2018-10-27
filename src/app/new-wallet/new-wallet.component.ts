import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-new-wallet',
  templateUrl: './new-wallet.component.html',
  styleUrls: ['./new-wallet.component.scss']
})
export class NewWalletComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit() {
  }

}
