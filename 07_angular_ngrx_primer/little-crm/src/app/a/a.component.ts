import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {increment, decrement} from '../../counter.actions';

@Component({
  selector: 'crm-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss']
})
export class AComponent implements OnInit {

  constructor(public store: Store<any>) { }

  ngOnInit(): void {
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }
}
