import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../services/customer.service';

@Component({
  selector: 'crm-page-customers-list',
  templateUrl: './page-customers-list.component.html',
  styleUrls: ['./page-customers-list.component.scss']
})
export class PageCustomersListComponent implements OnInit {


  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    this.customerService
      .getAllCustomers()
      .subscribe((customers) => {
        console.log(customers);
      });
  }

}
