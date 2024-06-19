import { Component } from '@angular/core';

type Gender = 'm' | 'f';

@Component({
  selector: 'app-i18n-select',
  templateUrl: './i18n-select.component.html',
  styleUrl: './i18n-select.component.css'
})
export class I18nSelectComponent {

  gender: Gender = 'f';

  messages = {
    m: 'Hello, Mr. Smith!',
    f: 'Hello, Mrs. Smith!'
  }

}
