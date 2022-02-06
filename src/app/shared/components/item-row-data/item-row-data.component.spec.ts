import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HackernewsApiService } from '../../services/hackernews-api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ItemRowDataComponent } from './item-row-data.component';

describe('ItemRowDataComponent', () => {
  let component: ItemRowDataComponent;
  let fixture: ComponentFixture<ItemRowDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemRowDataComponent ],
      providers: [HackernewsApiService, HttpClient],
      imports: [HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemRowDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
