import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AskQuestionComponent } from './ask-question.component';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from '../shared/shared.module';


const routes: Routes = [
  {
    path:"", component: AskQuestionComponent
  }
];

@NgModule({
  declarations: [
    AskQuestionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ButtonModule
  ]
})
export class AskQuestionModule { }
