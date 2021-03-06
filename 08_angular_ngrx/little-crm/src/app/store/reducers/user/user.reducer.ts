import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from '../../actions/user/user.actions';

export const userFeatureKey = 'user';

export interface State {

}

export const initialState: State = {

};

const userReducer = createReducer(
  initialState,

  on(UserActions.loadUsers, state => state),
  on(UserActions.loadUsersSuccess, (state, action) => state),
  on(UserActions.loadUsersFailure, (state, action) => state),

);

export function reducer(state: State | undefined, action: Action) {
  return userReducer(state, action);
}
