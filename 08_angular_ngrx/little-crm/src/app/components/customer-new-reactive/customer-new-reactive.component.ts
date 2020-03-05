import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import CustomerService from '../../services/customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'crm-customer-new-reactive',
  templateUrl: './customer-new-reactive.component.html',
  styleUrls: ['./customer-new-reactive.component.scss']
})
export class CustomerNewReactiveComponent implements OnInit {

  name = new FormControl('');
  purchases = new FormControl(0);

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  handleNewForm() {
    this.customerService.newCustomer(
      {
        name: this.name.value,
        purchases: this.purchases.value
      })
      .subscribe(() => {
        this.router.navigate(['/customers']);
      });
  }
}
