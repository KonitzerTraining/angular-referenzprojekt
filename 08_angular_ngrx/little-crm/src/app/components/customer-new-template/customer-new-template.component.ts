import { Component, OnInit } from '@angular/core';
import ICustomer from '../../model/icustomer';
import {Customer} from '../../model/customer';
import CustomerService from '../../services/customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'crm-customer-new-template',
  templateUrl: './customer-new-template.component.html',
  styleUrls: ['./customer-new-template.component.scss']
})
export class CustomerNewTemplateComponent implements OnInit {
  // public customer: ICustomer = {} as ICustomer;
  public customer: ICustomer = new Customer();

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  handleNewForm() {
    this.customerService.newCustomer(this.customer)
      .subscribe(() => {
        this.router.navigate(['/customers']);
      });
  }
}
