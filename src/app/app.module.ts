import { ItemCommentsModule } from './item-comments/item-comments.module';
import { TopStoriesModule } from './top-stories/top-stories.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavigationModule } from './main-navigation/main-navigation.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { FooterComponent } from './footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PastStoriesComponent } from './past-stories/past-stories.component';
import { AllCommentsComponent } from './all-comments/all-comments.component';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { ShowsComponent } from './shows/shows.component';
import { JobsPageComponent } from './jobs-page/jobs-page.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    FooterComponent,
    PastStoriesComponent,
    AllCommentsComponent,
    AskQuestionComponent,
    ShowsComponent,
    JobsPageComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainNavigationModule,
    FlexLayoutModule,
    TopStoriesModule,
    ItemCommentsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
