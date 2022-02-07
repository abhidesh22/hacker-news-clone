import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-display-items',
  templateUrl: './display-items.component.html',
  styleUrls: ['./display-items.component.scss']
})
export class DisplayItemsComponent implements OnInit {
  @Input() items: number[];
  @Output() showMoreStories = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  loadMoreStories(event: any) {
    this.showMoreStories.emit(event);
  }
}
