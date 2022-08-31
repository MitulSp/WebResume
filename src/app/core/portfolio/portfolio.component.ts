import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }

  fnOpenMVS() {
    const link = this.document.createElement('a');
    link.target = '_blank';
    link.href = 'https://mrs-webapp-v1.herokuapp.com/';
    link.click();
    link.remove();
  }
  fnOpenWed() {
    const link = this.document.createElement('a');
    link.target = '_blank';
    link.href = 'https://www.wedmantram.com/';
    link.click();
    link.remove();
  }
  fnOpenstaffing() {
    const link = this.document.createElement('a');
    link.target = '_blank';
    link.href = 'https://www.staffinggo.in/';
    link.click();
    link.remove();
  }
}
