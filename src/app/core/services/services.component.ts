import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  certificateArr: any = [
    { id: 1, url: '../../../assets/img/1.jpg', interval: 1000 },
    { id: 2, url: '../../../assets/img/2.jpg', interval: 1000 },
    { id: 3, url: '../../../assets/img/3.jpg', interval: 1000 },
    { id: 4, url: '../../../assets/img/4.jpg', interval: 1000 },
    { id: 5, url: '../../../assets/img/5.jpg', interval: 1000 },
    { id: 6, url: '../../../assets/img/6.jpg', interval: 1000 },
    { id: 7, url: '../../../assets/img/7.jpg', interval: 1000 }
  ];

  constructor() { }

  ngOnInit(): void {
    /*  $('.carousel').carousel({
       interval: 500
     }) */
  }

}
