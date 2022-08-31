import { DOCUMENT } from '@angular/common';
import { Component, DoCheck, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'webResume';
  currentDateTime = new Date();

  constructor(@Inject(DOCUMENT) private document: Document, private router: Router, private activatedRoute: ActivatedRoute,
    private titleService: Title) {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route: any) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route: any) => route.data)).subscribe((event: any) => {
        this.titleService.setTitle(event['title']);
      });
    if (!this.isDay()) {
      this.switchTheme()
    }
  }

  ngOnInit() {
  }
  ngDoCheck(): void {
    if (this.document.querySelector('.change-theme-color')?.classList.contains('open')) {
      window.addEventListener('scroll', () => {
        if (this.document.querySelector('.change-theme-color')?.classList.contains('open')) {
          this.document.querySelector('.change-theme-color')?.classList.remove('open')
        }
      });
    }
  }
  fnOpenThemeList() {
    this.document.querySelector('.change-theme-color')?.classList.toggle('open');
  }
  setthemeStyle(themeText: string) {
    /* 
        console.log(style.getPropertyValue('--root'))
        console.log(style.getPropertyValue('--skin-color'))
        console.log(window.getComputedStyle(document.documentElement).getPropertyValue('--skin-color')); */

    switch (themeText) {
      case 'theme':
        document.documentElement.style.setProperty('--skin-color', '#FF4500');

        break;
      case 'theme-2':
        document.documentElement.style.setProperty('--skin-color', '#DC143C');

        break;
      case 'theme-3':
        document.documentElement.style.setProperty('--skin-color', '#228B22');

        break;
      case 'theme-4':
        document.documentElement.style.setProperty('--skin-color', '#1E90FF');

        break;
      case 'theme-5':
        document.documentElement.style.setProperty('--skin-color', '#9932CC');

        break;
    }
  }
  switchTheme() {
    /*  this.document.body.classList.replace(
       this.theme,
       this.theme === 'light-theme'
         ? (this.theme = 'dark-theme')
         : (this.theme = 'light-theme')
     ); */
    const tempDayNight = this.document.querySelector('.day-night');
    tempDayNight?.querySelector('i')?.classList.toggle('fa-sun');
    tempDayNight?.querySelector('i')?.classList.toggle('fa-moon');
    this.document.body.classList.toggle('dark');
    window.addEventListener('load', () => {
      if (this.document.body.classList.contains('dark')) {
        tempDayNight?.querySelector('i')?.classList.add('fa-sun');
      } else {
        tempDayNight?.querySelector('i')?.classList.add('fa-moon');
      }
    })
  }
  formatAMPM(date: any) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }
  isDay() {
    const hours = (new Date()).getHours();
    return (hours >= 6 && hours < 18);
  }
}