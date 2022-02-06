import { DomainNamePipe } from './pipes/domain-name.pipe';
import { HackernewsApiService } from './services/hackernews-api.service';
import { RouterModule } from '@angular/router';
import { ItemRowDataComponent } from './components/item-row-data/item-row-data.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { ConvertTimePipe } from './pipes/convert-time.pipe';
import { MatDividerModule } from '@angular/material/divider';
import {DividerModule} from 'primeng/divider';
import { ItemCommentComponent } from './components/item-comment/item-comment.component';


@NgModule({
  declarations: [
    ItemRowDataComponent,
    DomainNamePipe,
    ConvertTimePipe,
    ItemCommentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatDividerModule,
    DividerModule
  ],
  exports: [
    ItemRowDataComponent,
    DomainNamePipe
  ],
  providers: [
    HackernewsApiService
  ]
})
export class SharedModule { }
