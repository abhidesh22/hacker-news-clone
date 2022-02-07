import { HackernewsApiService } from './../../services/hackernews-api.service';
import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../models/item-info';

@Component({
  selector: 'item-comment',
  templateUrl: './item-comment.component.html',
  styleUrls: ['./item-comment.component.scss']
})

/**
 * This component displays a single comment for the selected item and load more comments on demand. 
 * TODO: the sub-comment tree generation is not yet done and we need to create a separate component to handle 
 * the tree creation and make sure how much depth of the comment tree needs to be displayed to user.
 */

export class ItemCommentComponent implements OnInit {

  @Input() itemId: number | undefined;
  item!: Item;
  isExpanded: boolean = true;

  constructor(private hackernewsApiService: HackernewsApiService) { }

  ngOnInit(): void {
    this.hackernewsApiService.getSingleItem(this.itemId as number)
    .subscribe((data: Item) => {
      this.item = data;
    });
  }

}
