import { Component, OnInit } from '@angular/core';
import { HackernewsApiService } from '../shared/services/hackernews-api.service';

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.scss']
})
export class AskQuestionComponent implements OnInit {

  items: number[] = [];
  allItems: number[] = [];
  start: number = 0;
  count: number = 5;

  constructor( private hackernewsApiService: HackernewsApiService ) { }

  ngOnInit(): void {
    this.hackernewsApiService.universalGetApi("askstories")
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
