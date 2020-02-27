import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'crm-page-customer-edit',
  templateUrl: './page-customer-edit.component.html',
  styleUrls: ['./page-customer-edit.component.scss']
})
export class PageCustomerEditComponent implements OnInit {
  private id: string;

  customerEditForm = this.fb.group({
    name: ['test'],
    purchases: ['5'],
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
  }

}
