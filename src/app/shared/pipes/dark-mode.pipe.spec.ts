import { DarkModePipe } from './dark-mode.pipe';

describe('DarkModePipe', () => {
  it('Should return DarkMode if darkMode is true', () => {
    const pipe = new DarkModePipe();
    expect(pipe.transform(true)).toEqual('bg-dark text-white');
  });

  it('Should return LightMode if darkMode is false', () => {
    const pipe = new DarkModePipe();
    expect(pipe.transform(false)).toEqual('bg-light text-dark');
  });
});