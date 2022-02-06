import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from '../app.component';
import { AppModule } from '../app.module';
import { ItemCommentsComponent } from './item-comments.component';

describe('ItemCommentsComponent', () => {
  let component: ItemCommentsComponent;
  let fixture: ComponentFixture<ItemCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemCommentsComponent, AppComponent ],
      imports: [AppModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
