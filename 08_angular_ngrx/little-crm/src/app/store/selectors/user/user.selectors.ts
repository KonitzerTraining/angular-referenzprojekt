import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUser from '../../reducers/user/user.reducer';

export const selectUserState = createFeatureSelector<fromUser.State>(
  fromUser.userFeatureKey
);
