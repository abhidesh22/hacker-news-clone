import { HackernewsApiService } from './../../shared/services/hackernews-api.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoriesApiService {

  constructor(private hackernewsApiService: HackernewsApiService) { 
  }

  getTopStories(): Observable<any> {
    return this.hackernewsApiService.universalGetApi("topstories");
  }
}
