import { JobsPageComponent } from './../jobs-page/jobs-page.component';
import { ShowsComponent } from './../shows/shows.component';
import { AskQuestionComponent } from './../ask-question/ask-question.component';
import { AllCommentsComponent } from './../all-comments/all-comments.component';
import { PastStoriesComponent } from './../past-stories/past-stories.component';
import { NewStoriesComponent } from './../new-stories/new-stories.component';
import { TopStoriesComponent } from './../top-stories/components/top-stories.component';
import { LoginPageComponent } from './../login-page/login-page.component';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import {MainNavigationComponent} from './main-navigation.component';


@NgModule({
  declarations: [],
  imports: [
		RouterModule.forChild([
			{path:'',component: MainNavigationComponent},
      {path:'login',component: LoginPageComponent},
      {path:'topstories',component: TopStoriesComponent},
      {path:'newstories',component: NewStoriesComponent},
      {path:'past',component: PastStoriesComponent},
      {path:'comments',component: AllCommentsComponent},
      {path:'ask',component: AskQuestionComponent},
      {path:'show',component: ShowsComponent},
      {path:'jobs',component: JobsPageComponent},
      {path:'submit',component: LoginPageComponent}
		])
  ],
  exports: [
    RouterModule
  ]
})
export class MainNavigationRoutingModule { }
