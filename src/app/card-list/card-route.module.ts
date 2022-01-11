import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  {path: 'detail/:id', component:CardComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRouteModule { }
