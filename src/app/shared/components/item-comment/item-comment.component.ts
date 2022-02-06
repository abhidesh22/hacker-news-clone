import { HackernewsApiService } from './../../services/hackernews-api.service';
import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../models/item-info';

@Component({
  selector: 'item-comment',
  templateUrl: './item-comment.component.html',
  styleUrls: ['./item-comment.component.scss']
})
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
