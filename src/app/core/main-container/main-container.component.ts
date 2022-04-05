import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
declare var $: any;

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
    if ($('.typeeffect').length === 1) {
      const typedStrings = $('.typeeffect').text();
      const typed = new Typed('.text-slider', {
        strings: typedStrings.split(','),
        typeSpeed: 80,
        loop: true,
        backDelay: 1100,
        backSpeed: 30
      });
    }
  }

}
