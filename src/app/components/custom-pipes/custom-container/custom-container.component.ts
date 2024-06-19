import { Component } from '@angular/core';
import { DarkModeService } from '../../../shared/services/dark-mode.service';

@Component({
  selector: 'app-custom-container',
  templateUrl: './custom-container.component.html',
  styleUrl: './custom-container.component.css'
})
export class CustomContainerComponent {

  temperature: number = 31;

  constructor(
    private darkModeService: DarkModeService
  ) { }

  get dark() {
    return this.darkModeService.dark;
  }

  changeMode() {
    this.darkModeService.changeMode();
  }
}
