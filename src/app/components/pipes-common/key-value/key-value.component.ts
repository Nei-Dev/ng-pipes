import { Component } from '@angular/core';

@Component({
  selector: 'app-key-value',
  templateUrl: './key-value.component.html',
  styleUrl: './key-value.component.css'
})
export class KeyValueComponent {

  data: any = {
    name: 'Anne',
    age: 25,
    city: 'New York',
  };
}
