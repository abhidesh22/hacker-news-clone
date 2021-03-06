import { StoriesApiService } from './../services/stories-api.service';
import { Component, OnInit } from '@angular/core';

/**
 * This components displays the home page with top 5 stories in the start.
 * User can click on Load more to get the display of further stories.
 */
@Component({
  selector: 'app-top-stories',
  templateUrl: './top-stories.component.html',
  styleUrls: ['./top-stories.component.scss']
})
export class TopStoriesComponent implements OnInit {
  items: number[] = [];
  allItems: number[] = [];
  start: number = 0;
  count: number = 5;

  constructor(private storiesApiService: StoriesApiService) { }

  ngOnInit(): void {
    this.storiesApiService.getTopStories()
    .subscribe((items: any) => {
      this.allItems = items;
      this.items = this.allItems.slice(this.start, this.start + this.count);
    });;

  }

  loadMoreStories(): void {
    this.count+=5;
    this.items = this.start + this.count < this.allItems.length
      ? this.allItems.slice(this.start, this.start + this.count)
      : this.allItems;
  }
}
