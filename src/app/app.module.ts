import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NewWalletComponent } from './new-wallet/new-wallet.component';
import { ViewWalletComponent } from './view-wallet/view-wallet.component';
import { BlockchainComponent } from './blockchain/blockchain.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NewWalletComponent,
    ViewWalletComponent,
    BlockchainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
