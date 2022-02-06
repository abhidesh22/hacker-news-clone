import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomPreloadStrategyService } from './custom-preload-strategy.service';
import { PathResolveService } from './path-resolve.service';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    data: {
      preload: true,
    },
    loadChildren: () => import("./top-stories/top-stories.module").then((m) => m.TopStoriesModule)
  },
  {
    path: "topstories",
    data: {
      preload: false,
    },
    loadChildren: () => import("./top-stories/top-stories.module").then((m) => m.TopStoriesModule)
  },
  {
    path: "login",
    data: {
      preload: false,
    },
    loadChildren: () =>
      import("./login-page/login-page.module").then((m) => m.LoginPageModule),
  },
  {
    path: "userinfo",
    data: {
      preload: false,
    },
    loadChildren: () => import("./user-info/user-info.module").then((m) => m.UserInfoModule),
  },
  {
    path: "newstories",
    loadChildren: () => import("./new-stories/new-stories.module").then((m) => m.NewStoriesModule),
    data: {
      preload: false,
    },
  },
  {
    path: "itemdetails",
    data: {
      preload: false,
    },
    loadChildren: () => import("./item-comments/item-comments.module").then((m) => m.ItemCommentsModule),
  },
  {
    path: "**",
    resolve: {
      path: PathResolveService
    },
    loadChildren: () =>
      import("./notfound/notfound.module").then(
        (m) => m.NotfoundModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: CustomPreloadStrategyService,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
