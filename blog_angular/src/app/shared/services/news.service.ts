import { Injectable } from '@angular/core';
import { empty, Observable, of } from 'rxjs';
import json from 'src/app/core/mocks/news.json';

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

  getOtherNews(id: number): Observable<any> {
    return of(this.news.response.filter((el) => el.id !== id))
  }
}
