import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrl: './text.component.css'
})
export class TextComponent {

  @Input()
  text: string = 'teXt tO tEsT thE PiPeS';

}
