import {createReducer, on} from '@ngrx/store';
import {increment, decrement, reset} from './counter.actions';

// State
export const initialState = 0;

const COUNTER_REDUCER = createReducer(initialState,

  on(increment, state => {
      return state + 1;
    }
  ),
  on(decrement, state => state - 1),
  on(reset, state => 0),
);

export function counterReducer(state: any, action: any) {
  return COUNTER_REDUCER(state, action);
}
