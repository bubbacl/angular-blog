import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { RouterModule } from '@angular/router';

import { IndexComponent, MainComponent, ThanksComponent, BlogViewComponent, BlogPostViewComponent } from './modules';
import { PostElementComponent } from './shared';

import { appRoutes } from './app.router';

@NgModule({
  declarations: [
    IndexComponent,
    MainComponent,
    ThanksComponent,
    BlogViewComponent,
    BlogPostViewComponent,
    PostElementComponent
  ],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'angular-universal-firebase'
    }),
    RouterModule.forRoot(appRoutes),
    MarkdownModule.forRoot(),
    HttpClientModule
  ],
  exports: [MainComponent],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
