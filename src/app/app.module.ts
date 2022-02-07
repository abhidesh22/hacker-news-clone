import { RouterModule } from '@angular/router';
import { PanelModule } from 'primeng/panel';
import { ItemCommentsModule } from './item-comments/item-comments.module';
import { TopStoriesModule } from './top-stories/top-stories.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavigationModule } from './main-navigation/main-navigation.module';
import { FooterComponent } from './footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PastStoriesComponent } from './past-stories/past-stories.component';
import { AllCommentsComponent } from './all-comments/all-comments.component';
import { ShowsComponent } from './shows/shows.component';
import { JobsPageComponent } from './jobs-page/jobs-page.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HttpClientModule } from '@angular/common/http';
import { reducers, metaReducers } from '../app/shared/reducers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { interceptorProviders } from './interceptors';
import { StoreModule } from '@ngrx/store';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    PastStoriesComponent,
    AllCommentsComponent,
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
    HttpClientModule,
    PanelModule,
    BrowserAnimationsModule,
    RouterModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        // strictActionImmutability: true
      }
    }),
  ],
  providers: [ interceptorProviders ],
  bootstrap: [AppComponent]
})
export class AppModule { }
