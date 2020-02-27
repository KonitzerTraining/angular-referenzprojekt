import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../services/customer.service';
import {ICustomer} from '../../model/icustomer';

@Component({
  selector: 'crm-page-customers-list',
  templateUrl: './page-customers-list.component.html',
  styleUrls: ['./page-customers-list.component.scss']
})
export class PageCustomersListComponent implements OnInit {
  public customers: ICustomer[];

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    this.customerService
      .getAllCustomers()
      .subscribe((customers: ICustomer[]) => {
        this.customers = customers;
      });
  }
}
