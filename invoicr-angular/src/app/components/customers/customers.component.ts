import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../services/customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers;
  constructor(private customerService:CustomerService, private router:Router) { }

  ngOnInit() {
    this.customerService.getCustomers().subscribe(customers => {
      this.customers = customers;
    });
  }

  onDeleteClick(id){
    this.customerService.deleteCustomer(id).subscribe(customers => {
      this.router.navigate(['/']);
    });
  }

}
