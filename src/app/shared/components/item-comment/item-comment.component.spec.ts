import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HackernewsApiService } from '../../../shared/services/hackernews-api.service';
import { ItemCommentComponent } from './item-comment.component';

describe('ItemCommentComponent', () => {
  let component: ItemCommentComponent;
  let fixture: ComponentFixture<ItemCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemCommentComponent ],
      providers: [HackernewsApiService, HttpClient],
      imports: [HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
