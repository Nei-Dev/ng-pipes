import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ContainerComponent } from './components/pipes-common/container/container.component';
import { CustomContainerComponent } from './components/custom-pipes/custom-container/custom-container.component';
import { PipesCommonModule } from './components/pipes-common/pipes-common.module';
import { CustomPipesModule } from './components/custom-pipes/custom-pipes.module';
import { DarkModeService } from './shared/services/dark-mode.service';
import { DarkModePipe } from './shared/pipes/dark-mode.pipe';

describe('AppComponent', () => {

  let darkModeService: DarkModeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        PipesCommonModule,
        CustomPipesModule,
      ],
      declarations: [
        AppComponent,
        ContainerComponent,
        CustomContainerComponent,
        DarkModePipe,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    darkModeService = TestBed.inject(DarkModeService);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
