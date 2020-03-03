import { Component } from '@angular/core';

@Component({
    selector: 'crm-root',
    template: `
      <h1>{{title}}</h1>
      <crm-navigation></crm-navigation>
      <router-outlet></router-outlet>
    `,
    styles: []
})
export class AppComponent {
  title = 'Little CRM v0.0.1';
}
