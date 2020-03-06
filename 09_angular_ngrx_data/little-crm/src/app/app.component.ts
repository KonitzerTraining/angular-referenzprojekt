import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Customer} from './customer';
import {CustomerService} from './customer.service';

@Component({
  selector: 'crm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  loading$: Observable<boolean>;
  customers$: Observable<Customer[]>;

  constructor(private customerService: CustomerService) {
    this.customers$ = customerService.entities$;
    this.loading$ = customerService.loading$;
  }

  getCustomers() {
    this.customerService.getAll().subscribe((data) => {
      console.log(data);
    });
  }

  ngOnInit(): void {
   this.getCustomers();
  }
}
