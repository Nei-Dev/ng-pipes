import { Component } from '@angular/core';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrl: './json.component.css'
})
export class JsonComponent {

  data: any = {
    name: 'Anne',
    age: 25,
    city: 'New York',
  }

}
