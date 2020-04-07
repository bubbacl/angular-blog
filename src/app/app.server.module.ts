import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppModule } from './app.module';
import { MainComponent } from './modules';

@NgModule({
  imports: [
    ServerModule,
    NoopAnimationsModule,
    AppModule,
  ],
  bootstrap: [MainComponent]
})
export class AppServerModule { }
