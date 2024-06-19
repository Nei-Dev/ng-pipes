import { Component } from '@angular/core';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrl: './async.component.css'
})
export class AsyncComponent {

  img = new Promise((res, rej) => {
    res('https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png')
  });

}
