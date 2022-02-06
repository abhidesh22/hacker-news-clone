import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BASE_URL } from '../constants/shared.constants';
//import { environment } from "../../environments/environment";
//import { Item, ItemId, User } from "../data-model/interfaces";

@Injectable({
  providedIn: 'root'
})
export class HackernewsApiService {

  constructor(private http: HttpClient) { }

  universalGetApi(type: string): Observable<any> {
    return this.http
      .get(`${BASE_URL}/${type}.json`);
  }

  getSingleItem(id: number): Observable<any> {
    return this.http.get(`${BASE_URL}/item/${id}.json`);
  }
  generateApi(type: string) {

  }
}
