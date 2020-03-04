import {Component, OnInit} from '@angular/core';
import CustomerService from '../../services/customer.service';
import ICustomer from '../../model/icustomer';

@Component({
  selector: 'crm-page-customers-list',
  templateUrl: './page-customers-list.component.html',
  styleUrls: ['./page-customers-list.component.scss']
})
export class PageCustomersListComponent implements OnInit {

  // Muss public sein für die Verwendung im HTML-Template
  public customers: ICustomer[];
  public currencyFormat = {
    code: 'EUR',
    display: 'symbol',
    format: '1.2-2',
    local: 'de-DE'
  };

  // Dependency injection
  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    this.customerService
      .getAllCustomers() // Observable
      .subscribe((customers: ICustomer[]) => {
        this.customers = customers;
      });
  }

  deleteCustomer(id: number) {
    this.customerService
      .deleteCustomer(id)
      .subscribe(() => {
        this.getCustomers();
      });
  }
}
