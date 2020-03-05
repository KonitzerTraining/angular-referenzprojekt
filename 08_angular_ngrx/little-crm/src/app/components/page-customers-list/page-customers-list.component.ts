import {Component, OnInit} from '@angular/core';
import CustomerService from '../../services/customer.service';
import ICustomer from '../../model/icustomer';
import {select, Store} from '@ngrx/store';
import {loadCustomers, deleteCustomer} from '../../store/actions/customer/customer.actions';
import {CustomerState} from '../../store/reducers/customer/customer.reducer';
import {selectCustomerState} from '../../store/selectors/customer/customer.selectors';
import {Observable} from 'rxjs';

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
  public customers$: Observable<CustomerState>;

  constructor(
    private customerService: CustomerService,
    private store: Store<CustomerState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(loadCustomers());

    this.customers$ = this.store.pipe(select(selectCustomerState));
  }

  deleteCustomer(id: number) {
    this.store.dispatch(deleteCustomer({id}));
  }
}
