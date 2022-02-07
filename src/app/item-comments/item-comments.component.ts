import { Component, OnInit, Input, OnDestroy, Type } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Item } from '../shared/models/item-info';
import { HackernewsApiService } from '../shared/services/hackernews-api.service';

@Component({
  selector: 'app-item-comments',
  templateUrl: './item-comments.component.html',
  styleUrls: ['./item-comments.component.scss']
})
export class ItemCommentsComponent implements OnInit, OnDestroy {
  isLoading: boolean = false;

  itemId!: number;
  itemDetails!: Item; 
  itemComments: number[] | undefined;
  start: number = 0;
  count: number = 3;

  routeSubscription!: Subscription;
  itemSubscription!: Subscription;

  constructor(private route: ActivatedRoute,
    private hackernewsApiService: HackernewsApiService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.routeSubscription = this.route.params.subscribe((params) => {
      if (params['itemId']) {
        this.itemId = params['itemId'];
      }
      this.itemSubscription = this.hackernewsApiService.getSingleItem(this.itemId)
      .subscribe((data: Item) => {
        this.itemDetails = data;
        this.populateItemCommands();
        this.isLoading = false;
      });
    });
  }

  populateItemCommands() {
    this.itemComments = (this.itemDetails?.kids as number[])?.length < this.count
    ? this.itemDetails?.kids
    : (this.itemDetails?.kids as number[])?.slice(this.start, this.start + this.count);
  }

  loadMoreComments() {
    this.count+=3;
    this.populateItemCommands();
  }

  ngOnDestroy() {
    this.routeSubscription?.unsubscribe();
    this.itemSubscription?.unsubscribe();
  }

}
