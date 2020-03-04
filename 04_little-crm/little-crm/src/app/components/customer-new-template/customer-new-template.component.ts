import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'crm-customer-new-template',
  templateUrl: './customer-new-template.component.html',
  styleUrls: ['./customer-new-template.component.scss']
})
export class CustomerNewTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  handleNewForm() {
    console.log('aha');
  }
}
