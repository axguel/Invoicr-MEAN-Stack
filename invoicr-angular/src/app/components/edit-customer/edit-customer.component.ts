import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../services/customer.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  id;
  first_name;
  last_name;
  company;
  email;
  phone;
  street;
  city;
  state;
  zip;
  constructor(private customerService:CustomerService, private router: Router, private route: ActivatedRoute) { }
  
  ngOnInit() {
     this.id = this.route.snapshot.params['id'];

    this.customerService.getCustomer(this.id).subscribe(customer => {
      this.first_name = customer.first_name;
     this.last_name = customer.last_name;
      this.company = customer.company;
     this.email = customer.email;
     this.phone = customer.phone;
     this.street = customer.address.street;
     this.city = customer.address.city;
     this.state = customer.address.state;
     this.zip = customer.address.zip;

    });
  }

  onEditSubmit(){
     let customer = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        phone: this.phone,
        address: {
          street: this.street,
          city: this.city,
          state: this.state,
          zip: this.zip
        }
  }

  this.customerService.updateCustomer(this.id, customer).subscribe(customer => {
    this.router.navigate(['/']);
  });

}
}
