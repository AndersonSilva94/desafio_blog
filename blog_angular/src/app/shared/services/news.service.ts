import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import json from 'src/app/core/mocks/news.json'

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  news = json

  constructor() { }

  getNews(): Observable<any> {
    return of(this.news)
  }
}
