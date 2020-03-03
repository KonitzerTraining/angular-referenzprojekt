import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'crm-page-template-syntax',
  templateUrl: './page-template-syntax.component.html',
  styleUrls: ['./page-template-syntax.component.scss']
})
export class PageTemplateSyntaxComponent implements OnInit {

  flag = 1;
  titleText: string = 'asdf asfd asdf';

  constructor() {
  }

  ngOnInit(): void {
  }

  changeFlag(id: number) {
    this.flag = id;
  }
}
