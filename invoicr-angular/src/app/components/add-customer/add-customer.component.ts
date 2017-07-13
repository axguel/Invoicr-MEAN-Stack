import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../services/customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  first_name;
  last_name;
  company;
  email;
  phone;
  street;
  city;
  state;
  zip;

  constructor(private customerService:CustomerService, private router: Router) { }

  ngOnInit() {
  }

  onAddSubmit(){
    let customer = {
      first_name: this.first_name,
      last_name: this.last_name,
      company: this.company,
      email: this.email,
      phone: this.phone,
      address: {
        street:this.street,
        city: this.city,
        state: this.state,
        zip: this.zip
      }
    }

    this.customerService.saveCustomer(customer).subscribe(customer => {
      this.router.navigate(['/']);
    });
  }


}
