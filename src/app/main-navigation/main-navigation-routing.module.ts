import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import {MainNavigationComponent} from './main-navigation.component';


@NgModule({
  declarations: [],
  imports: [
		RouterModule.forChild([
			{path:'',component: MainNavigationComponent}
		])
  ],
  exports: [
    RouterModule
  ]
})
export class MainNavigationRoutingModule { }
