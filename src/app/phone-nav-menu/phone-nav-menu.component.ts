import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-phone-nav-menu',
  templateUrl: './phone-nav-menu.component.html',
  styleUrls: ['./phone-nav-menu.component.scss']
})
export class PhoneNavMenuComponent {
  @Output() menuOn = new EventEmitter<boolean>();
  menuOnState = false;

  emit()
  {
    this.menuOnState = !this.menuOnState
    this.menuOn.emit(this.menuOnState) ;
  }

}
