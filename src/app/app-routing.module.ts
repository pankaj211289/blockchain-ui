import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlockchainComponent } from './blockchain/blockchain.component';
import { NewWalletComponent } from './new-wallet/new-wallet.component';
import { ViewWalletComponent } from './view-wallet/view-wallet.component';

const routes: Routes = [
	{ path: '', component: BlockchainComponent },
	{ path: 'new-wallet', component: NewWalletComponent },
	{ path: 'view-wallet', component: ViewWalletComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
