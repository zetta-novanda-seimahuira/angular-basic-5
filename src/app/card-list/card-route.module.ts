import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardListComponent } from './card-list.component';
import { DetailCardComponent } from './detail-card/detail-card.component';

const routes: Routes = [{
  path: '',
  component: CardListComponent
},
{
  path: 'detail/:id',
  component: DetailCardComponent
}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CardRouteModule { }
