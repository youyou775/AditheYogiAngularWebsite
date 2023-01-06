import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-phone-nav-menu-body',
  templateUrl: './phone-nav-menu-body.component.html',
  styleUrls: ['./phone-nav-menu-body.component.scss']
})
export class PhoneNavMenuBodyComponent {
  @Input() menuOn:boolean = false;

}
