import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomPipesModule } from './components/custom-pipes/custom-pipes.module';
import { PipesCommonModule } from './components/pipes-common/pipes-common.module';
import { DarkModePipe } from './shared/pipes/dark-mode.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DarkModePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PipesCommonModule,
    CustomPipesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
