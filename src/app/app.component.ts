import { Component } from '@angular/core';
import { DarkModeService } from './shared/services/dark-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(
    private darkModeService: DarkModeService
  ) { }

  get dark() {
    return this.darkModeService.dark;
  }
 }
