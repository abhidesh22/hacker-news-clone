import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopStoriesComponent } from './top-stories/components/top-stories.component';
import { MainNavigationModule } from './main-navigation/main-navigation.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopStoriesComponent,
    LoginPageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainNavigationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
