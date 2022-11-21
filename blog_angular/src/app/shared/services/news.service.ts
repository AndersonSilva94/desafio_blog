import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import json from 'src/app/core/mocks/news.json'
import { News } from '../models/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  news = json

  constructor() { }

  getNews(): Observable<any> {
    return of(this.news)
  }

  getNewsById(id: number): Observable<any> {
    return of(this.news.response.find((el) => el.id === id))
  }
}
