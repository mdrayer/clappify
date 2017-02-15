import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ClapformComponent } from '../components/clap-form/clap-form.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: ClapformComponent,
  },
  {
    path: 'clap',
    redirectTo: '/',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '/404'
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }

