import { RouterModule, Routes } from '@angular/router';
import { TopStoriesComponent } from './components/top-stories.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path:"", component: TopStoriesComponent
  }
];

@NgModule({
  declarations: [TopStoriesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TopStoriesModule { }
