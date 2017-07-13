import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CustomersComponent } from './components/customers/customers.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { AddInvoiceComponent } from './components/add-invoice/add-invoice.component';

import {CustomerService} from './services/customer.service';

const appRoutes: Routes = [
  { path:'', component: CustomersComponent},
  {path: 'customer/add', component:AddCustomerComponent},
  {path: 'customer/:id', component: CustomerDetailsComponent},
  {path: 'customer/edit/:id', component: EditCustomerComponent},
  {path: 'invoice/add/:customer_id', component: AddInvoiceComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CustomersComponent,
    AddCustomerComponent,
    EditCustomerComponent,
    CustomerDetailsComponent,
    AddInvoiceComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
