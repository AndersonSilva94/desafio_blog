import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { News } from '../models/news';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  private resultsArrBySearch = new BehaviorSubject<News[]>([]);

  constructor() { }

  setResultsArrBySearch(value: News[]) {
    this.resultsArrBySearch.next(value)
  }

  getResultsArrBySearch() {
    return this.resultsArrBySearch;
  }
}
