import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'darkmode'
})
export class DarkModePipe implements PipeTransform{

  transform(isDarkMode: boolean): string {
    return isDarkMode ? 'bg-dark text-white' : 'bg-light text-dark';
  }

}