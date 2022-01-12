import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from './card-list.component';
import { CardRouteModule } from './card-route.module';
import { CardComponent } from './card/card.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DetailCardComponent } from './detail-card/detail-card.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CardListComponent,
    CardComponent,
    DetailCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    CardRouteModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatGridListModule,
    FormsModule,
    BrowserModule,
    HttpClientModule
    
  ]
})
export class CardListModule { }
