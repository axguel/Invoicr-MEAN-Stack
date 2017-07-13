import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../services/customer.service';
import {Router, ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css']
})
export class AddInvoiceComponent implements OnInit {
  customer;
  service;
  price;
  status;
  due;
  constructor(private customerService:CustomerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onAddSubmit(){
    this.customer = this.route.snapshot.params['customer_id'];

    let invoice = {
      customer: this.customer,
      service: this.service,
      price: this.price,
      status: this.status,
      due: this.due
    }

    this.customerService.saveInvoice(invoice).subscribe(invoice => {
      this.router.navigate(['/']);
    });
  }

}
