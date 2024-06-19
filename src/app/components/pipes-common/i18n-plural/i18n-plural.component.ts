import { Component } from '@angular/core';



@Component({
  selector: 'app-i18n-plural',
  templateUrl: './i18n-plural.component.html',
  styleUrl: './i18n-plural.component.css'
})
export class I18nPluralComponent {

  guests = 0;

  messages = {
    '=0': 'No guests',
    '=1': 'One guest',
    'other': '# guests'
  }

  addGuest() {
    this.guests++;
  }

  removeGuest() {
    if(this.guests > 0) this.guests--;
  }

}
