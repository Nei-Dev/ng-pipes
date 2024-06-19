import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrl: './date.component.css'
})
export class DateComponent {

  date: Date = new Date();

}
