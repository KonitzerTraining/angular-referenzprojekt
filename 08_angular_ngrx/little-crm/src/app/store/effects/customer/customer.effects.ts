import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, concatMap, mergeMap} from 'rxjs/operators';
import {EMPTY, of} from 'rxjs';

import * as CustomerActions from '../../actions/customer/customer.actions';
import CustomerService from '../../../services/customer.service';


@Injectable()
export class CustomerEffects {

  loadCustomers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CustomerActions.loadCustomers),
      mergeMap(() => this.customerService.getAllCustomers()
        .pipe(
          map(customers => ({type: '[Customer] Load Customers Success', customers})),
          catchError(() => EMPTY)
        ))
    );
  });

  deleteCustomer$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CustomerActions.deleteCustomer),
      mergeMap(({id}) => this.customerService.deleteCustomer(id)
        .pipe(
          map(customers => ({type: '[Customer] Delete Customer Success'})),
          catchError(() => EMPTY)
        ))
    );
  });



  constructor(
    private actions$: Actions,
    private customerService: CustomerService
  ) {
  }

}
