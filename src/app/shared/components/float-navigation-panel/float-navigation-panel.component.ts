import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-float-navigation-panel',
  templateUrl: './float-navigation-panel.component.html',
  styleUrls: ['./float-navigation-panel.component.scss']
})
export class FloatNavigationPanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    /* var navItems = document.querySelectorAll(".float-nav-panel_menu");
navItems.forEach(function(e, i) {
	e.addEventListener("click", function(e) {
		navItems.forEach(function(e2, i2) {
			e2.classList.remove("float-nav-panel_menu--active");
		})
		this.classList.add("float-nav-panel_menu--active");
	});
}); */
  }

}
