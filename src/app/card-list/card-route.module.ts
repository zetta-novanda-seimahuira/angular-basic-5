import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CardListComponent } from './card-list.component';
import { DetailCardComponent } from './detail-card/detail-card.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [{
  path: '',
  component: CardListComponent
},
{
  path: 'detail/:id',
  component: DetailCardComponent
},
{
  path: 'adduser',
  component: FormComponent
}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule,
      TranslateModule
    ]
})
export class CardRouteModule { }
