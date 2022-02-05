import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-stories',
  templateUrl: './top-stories.component.html',
  styleUrls: ['./top-stories.component.scss']
})
export class TopStoriesComponent implements OnInit {
  items: number[] = [];
  constructor() { }

  ngOnInit(): void {
    console.log('test');
    this.items = Array(5);
  }

}
