import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppModule } from './app.module';
import { MainComponent } from './modules';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    AppModule,
  ],
  bootstrap: [MainComponent]
})
export class AppBrowserModule { }
