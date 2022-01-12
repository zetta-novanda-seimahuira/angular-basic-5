import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CardListComponent } from './card-list/card-list.component';
import { FormComponent } from './form/form.component';
import { AppComponent } from './app.component';

export const routes :Routes = [
  { path: '',
  component: CardListComponent},
  {
    path: 'list',
    loadChildren: () => import('./card-list/card-route.module').then((m) => m.CardRouteModule),
  },
  { path: '**', redirectTo: 'HomeComponent' },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) 
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModue { }
