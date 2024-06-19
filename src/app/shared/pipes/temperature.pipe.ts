import { Pipe, PipeTransform } from '@angular/core';

type TemperatureType = 'C' | 'F';

@Pipe({
  name: 'temperature'
})
export class TemperaturePipe implements PipeTransform {

  transform(value: number, type?: TemperatureType): string {

    const newValue = type === 'F' ? (value * 9 / 5) + 32 : value;
    return `${newValue}°${type ?? 'C'}`;
  }

}
