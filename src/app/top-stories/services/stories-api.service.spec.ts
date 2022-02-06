import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from "@angular/common/http";
import { StoriesApiService } from './stories-api.service';

describe('StoriesApiService', () => {
  let service: StoriesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [StoriesApiService]
    });
    service = TestBed.inject(StoriesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
