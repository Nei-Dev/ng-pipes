import { TemperaturePipe } from './temperature.pipe';

describe('TemperaturePipe', () => {
  it('create an instance', () => {
    const pipe = new TemperaturePipe();
    expect(pipe).toBeTruthy();
  });

  it('Should return °C with same value if temperature is 0', () => {
    const pipe = new TemperaturePipe();
    expect(pipe.transform(0)).toEqual('0°C');
    expect(pipe.transform(0, 'C')).toEqual('0°C');
  });

  it('Should return 32°F if temperature is 0', () => {
    const pipe = new TemperaturePipe();
    expect(pipe.transform(0, 'F')).toEqual('32°F');
  });
});
