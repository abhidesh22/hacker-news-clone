import { MainNavigationRoutingModule } from './main-navigation-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainNavigationComponent} from './main-navigation.component';
import {MenubarModule} from 'primeng/menubar';




@NgModule({
  declarations: [
    MainNavigationComponent
  ],
  imports: [
    CommonModule,
    MainNavigationRoutingModule,
    MenubarModule
  ],
  exports: [
    MainNavigationComponent
  ]
})
export class MainNavigationModule { }
