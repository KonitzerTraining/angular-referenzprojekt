import { createAction, props } from '@ngrx/store';
import ICustomer from '../../../model/icustomer';

export const loadCustomers = createAction(
  '[Customer] Load Customers'
);

export const loadCustomersSuccess = createAction(
  '[Customer] Load Customers Success',
  props<{ customers: ICustomer[] }>()
);

export const loadCustomersFailure = createAction(
  '[Customer] Load Customers Failure',
  props<{ error: any }>()
);

export const deleteCustomer = createAction(
  '[Customer] Delete Customer',
  props<{ id: number }>()
);

export const deleteCustomerSuccess = createAction(
  '[Customer] Delete Customer Success',
);

export const deleteCustomerFailure = createAction(
  '[Customer] Delete Customer Failure',
  props<{ error: any }>()
);


