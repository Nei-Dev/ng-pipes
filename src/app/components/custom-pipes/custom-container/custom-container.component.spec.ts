import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperaturePipe } from '../../../shared/pipes/temperature.pipe';
import { CustomContainerComponent } from './custom-container.component';

describe('CustomContainerComponent', () => {
  let component: CustomContainerComponent;
  let fixture: ComponentFixture<CustomContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CustomContainerComponent,
        TemperaturePipe,
      ],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomContainerComponent);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
