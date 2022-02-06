import { Component, OnInit } from '@angular/core';
import { HackernewsApiService } from '../shared/services/hackernews-api.service';

@Component({
  selector: 'app-new-stories',
  templateUrl: './new-stories.component.html',
  styleUrls: ['./new-stories.component.scss']
})
export class NewStoriesComponent implements OnInit {
  items: number[] = [];
  allItems: number[] = [];
  start: number = 0;
  count: number = 5;

  constructor( private hackernewsApiService: HackernewsApiService ) { }

  ngOnInit(): void {
    this.hackernewsApiService.universalGetApi("newstories")
    .subscribe((items: any) => {
      console.log("test ", items);
      this.allItems = items;
      this.items = this.allItems.slice(this.start, this.start + this.count);
    });;
  }

  loadMoreStories(): void {
    console.log('here loadmore');
    this.count+=5;
    this.items = this.start + this.count < this.allItems.length
      ? this.allItems.slice(this.start, this.start + this.count)
      : this.allItems;
  }

}
