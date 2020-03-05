import { Action, createReducer, on } from '@ngrx/store';
import * as CustomerActions from '../../actions/customer/customer.actions';
import ICustomer from 'src/app/model/icustomer';

export const customerFeatureKey = 'customer';

export interface CustomerState {
  loading: boolean;
  customers: ICustomer[];
}

export const initialState: CustomerState = {
  loading: false,
  customers: []
};

const customerReducer = createReducer(
  initialState,

  on(CustomerActions.loadCustomers, state => {
    state.loading = true;
    return state;
  }),

  // on(CustomerActions.loadCustomersSuccess, (state, action) => {
  on(CustomerActions.loadCustomersSuccess, (state, action) => {
    console.log(action.customers);
    state.loading = false;
    state.customers = action.customers;

    return state;
  }),
  on(CustomerActions.loadCustomersFailure, (state, action) => state),

);

export function reducer(state: CustomerState | undefined, action: Action) {
  return customerReducer(state, action);
}
