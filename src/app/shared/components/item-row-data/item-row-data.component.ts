import { Item } from './../../models/item-info';
import { HackernewsApiService } from '../../services/hackernews-api.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'item-row-data',
  templateUrl: './item-row-data.component.html',
  styleUrls: ['./item-row-data.component.scss']
})
export class ItemRowDataComponent implements OnInit {
  @Input() itemId!: number; 
  @Input() showAddComment!: boolean; 
  @Input() itemDetails!: Item; 

  item: any;
  constructor(private hackernewsApiService: HackernewsApiService) { }

  ngOnInit(): void {
    if(this.itemDetails) {
      this.item = this.itemDetails;
    } else {
      this.hackernewsApiService.getSingleItem(this.itemId)
      .subscribe((data: Item) => {
        this.item = data;
        //console.log(this.item);
      });
    }
  }

}
