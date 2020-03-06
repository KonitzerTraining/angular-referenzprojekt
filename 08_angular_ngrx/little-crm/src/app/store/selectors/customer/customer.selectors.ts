import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCustomer from '../../reducers/customer/customer.reducer';
import {CustomerState} from '../../reducers/customer/customer.reducer';

export const selectCustomerState = createFeatureSelector<fromCustomer.CustomerState>(
  fromCustomer.customerFeatureKey
);

// potentiell cachend
export const selectLoadingState = createSelector(
  selectCustomerState,
  (state: CustomerState) => state.loading
);

