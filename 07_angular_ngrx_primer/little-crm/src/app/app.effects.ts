import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, mergeMap} from 'rxjs/operators';
import {from, of} from 'rxjs';


@Injectable()
export class AppEffects {

  saveCountValue$ = createEffect(() => {
    return this.actions$.pipe(
      ofType('[Counter Component] Increment'),
      mergeMap(() => of([1, 2, 3]).pipe(
        map(items => ({type: '[Counter Effect] Saved'})),
      ))
    );
  });

  constructor(private actions$: Actions) {
  }
}
