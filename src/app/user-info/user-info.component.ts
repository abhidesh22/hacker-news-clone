import { UserInfo } from './../shared/models/user-info';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { HackernewsApiService } from '../shared/services/hackernews-api.service';
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  isLoading: boolean = false;

  userId!: string;
  userDetails!: UserInfo;

  routeSubscription!: Subscription;
  userSubscription!: Subscription;

  constructor(private route: ActivatedRoute,
    private hackernewsApiService: HackernewsApiService) { }

  ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe((params) => {
      if (params['userId']) {
        this.userId = params['userId'];
      }
      this.userSubscription = this.hackernewsApiService.getUserInfo(this.userId)
      .subscribe((data: UserInfo) => {
        this.userDetails = data;
      });
    });
  }

  ngOnDestroy() {
    this.routeSubscription?.unsubscribe();
    this.userSubscription?.unsubscribe();
  }
}
