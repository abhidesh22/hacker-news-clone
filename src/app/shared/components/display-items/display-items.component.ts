import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-display-items',
  templateUrl: './display-items.component.html',
  styleUrls: ['./display-items.component.scss']
})
/**
 * This is a common component which would be parsed by all page components to invoke and display the details for all items. 
 */
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
