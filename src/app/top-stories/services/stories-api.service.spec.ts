import { TestBed, async } from '@angular/core/testing';
import { HttpClientModule } from "@angular/common/http";
import { StoriesApiService } from './stories-api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BASE_URL } from '../../shared/constants/shared.constants';

describe('StoriesApiService', () => {
  let service: StoriesApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StoriesApiService]
    });
    service = TestBed.inject(StoriesApiService);
    httpTestingController = TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  describe('#getTopStories', () => {

    it('should make a GET request to the topstories', async(() => {
      service.getTopStories().subscribe();

      httpTestingController.expectOne(req => 
        req.method === 'GET'
        && req.url === `${BASE_URL}/topstories.json`
      );

      expect().nothing();
    }));

  });
});
