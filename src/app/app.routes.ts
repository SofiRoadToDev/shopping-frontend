import { Routes } from '@angular/router';
import { TableListComponent } from './components/table-list/table-list.component';
import { CardComponent } from './components/card/card.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

export const routes: Routes = [
  { path: 'productos', component: CardComponent },
  { path: '', component: TableListComponent },
  { path: 'checkout', component: CheckoutComponent },
];
