import { createAction } from '@ngrx/store';

/*
Beginn der Planung anhand der möglichen Aktionen
[Auslösekomponente] Zweck
 */
export const increment = createAction('[Counter Component] Increment');
export const saved = createAction('[Counter Effect] Saved');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');
