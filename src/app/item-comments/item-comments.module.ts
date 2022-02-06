import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCommentsComponent } from './item-comments.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: ':itemId', component: ItemCommentsComponent
  }
];

@NgModule({
  declarations: [
    ItemCommentsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ButtonModule
  ]
})
export class ItemCommentsModule { }
