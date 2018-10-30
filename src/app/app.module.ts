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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AccordionModule } from 'ngx-bootstrap/accordion';

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
    FormsModule,
    NgbModule,
    CollapseModule,
    AccordionModule.forRoot()
  ],
  exports: [
    AccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
