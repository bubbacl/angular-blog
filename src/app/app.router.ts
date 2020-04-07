import { Routes } from '@angular/router';

import { IndexComponent, ThanksComponent, BlogViewComponent, BlogPostViewComponent } from './modules';

export const appRoutes: Routes = [
  {
    path: '',
    component: IndexComponent,
    data: { title: 'Inicio' }
  },
  {
    path: 'gracias', component: ThanksComponent,
    data: { title: 'Gracias' }
  },
  {
    path: 'blog/:id',
    component: BlogPostViewComponent,
    data: { title: 'Blog' }
  },
  {
    path: 'blog',
    component: BlogViewComponent,
    data: { title: 'Blog' }
  },
  {
    path: '**',
    component: IndexComponent
  }
];
