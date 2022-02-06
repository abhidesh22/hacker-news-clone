import { ButtonModule } from 'primeng/button';
import { StoriesApiService } from './services/stories-api.service';
import { SharedModule } from './../shared/shared.module';
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
    RouterModule.forChild(routes),
    SharedModule,
    ButtonModule
  ],
  providers: [
    StoriesApiService
  ]
})
export class TopStoriesModule { }
