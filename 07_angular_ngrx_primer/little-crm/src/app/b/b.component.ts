import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

@Component({
  selector: 'crm-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss']
})
export class BComponent implements OnInit {
  public count: any;
  public count$: Observable<number>;

  constructor(public store: Store<{count: number}>) { }

  ngOnInit(): void {
    this.count$ = this.store.pipe(select('count'));
    this.count$.subscribe((count) => {
      this.count = count;
    });

  }

}
