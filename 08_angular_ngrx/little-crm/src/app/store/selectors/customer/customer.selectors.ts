import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCustomer from '../../reducers/customer/customer.reducer';

export const selectCustomerState = createFeatureSelector<fromCustomer.CustomerState>(
  fromCustomer.customerFeatureKey
);

export const selectLoadingState = createFeatureSelector<fromCustomer.CustomerState>(
  fromCustomer.customerFeatureKey
);
