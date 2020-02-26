import { Component } from '@angular/core';

@Component({
  selector: 'crm-navigation',
  template: `
    <nav>
      <ul>
        <li><a routerLink="/start">Start</a></li>
        <li><a routerLink="/customers">Customers</a></li>
        <li><a routerLink="/imprint">Imprint</a></li>
      </ul>
    </nav>
  `,
  styles: []
})
export class NavigationComponent {
  constructor() { }
}
