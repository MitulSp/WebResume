import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appRightClickDisabled]'
})
export class RightClickDisabledDirective {
  @HostListener('contextmenu', ['$event'])
  onRightClick(event: any) {
    event.preventDefault();
  }

  constructor() { }

}
