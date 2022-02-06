import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from "@angular/common/http";
import { HackernewsApiService } from './hackernews-api.service';

describe('HackernewsApiService', () => {
  let service: HackernewsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HackernewsApiService],
    });
    service = TestBed.inject(HackernewsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
