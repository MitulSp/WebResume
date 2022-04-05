import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-navigation-side-panel',
  templateUrl: './navigation-side-panel.component.html',
  styleUrls: ['./navigation-side-panel.component.scss']
})
export class NavigationSidePanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  fnToggleMenu() {
    const togglerBtn = document.querySelector('.nav-menu-toggler');
    const tempAside = document.querySelector('.aside');
    const temSection = document.querySelector('.main-content');
    tempAside?.classList.toggle("open");
    togglerBtn?.classList.toggle('open');
    temSection?.classList.toggle('open');
    console.log(temSection);
  }
}
