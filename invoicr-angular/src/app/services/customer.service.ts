import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CustomerService {

  constructor(private http:Http) { }

  getCustomers(){
    return this.http.get('http://localhost:3000/api/customers')
    .map(res => res.json());
  }

 getCustomer(id){
    return this.http.get('http://localhost:3000/api/customers/'+id)
    .map(res => res.json());
  }

  saveCustomer(customer){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/customers', customer, {headers: headers})
    .map(res=>res.json());
  }

    updateCustomer(id, customer){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('http://localhost:3000/api/customers/'+id, customer, {headers: headers})
    .map(res=>res.json());
  }

  deleteCustomer(id){
    return this.http.delete('http://localhost:3000/api/customers/'+id)
    .map(res => res.json());
  }
  getInvoices(customer_id){
      return this.http.get('http://localhost:3000/api/invoices/customer/'+customer_id)
      .map(res => res.json());
    }

    markPaid(id, invoice){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('http://localhost:3000/api/invoices/'+id, invoice, {headers: headers})
    .map(res=>res.json());
    }

    deleteInvoice(id){
    return this.http.delete('http://localhost:3000/api/invoices/'+id)
    .map(res => res.json());
  }

   saveInvoice(invoice){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/invoices', invoice, {headers: headers})
    .map(res=>res.json());
  }

}


