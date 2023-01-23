import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { News } from 'src/app/shared/models/news';
import { GeneralService } from 'src/app/shared/services/general.service';
import { NewsService } from 'src/app/shared/services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  news!: News[];

  constructor(
    private newsService: NewsService,
    private generalService: GeneralService
  ) { }

  ngOnInit(): void {
    this.getNews()
  }

  ngAfterViewInit(): void {
    this.searchNews()
  }

  getNews() {
    this.newsService.getNews()
      .subscribe(
        (res) => this.news = res.response
      )
  }

  searchNews() {
    this.news = [];
    this.generalService.getResultsArrBySearch()
    .subscribe(
      (res) => {
        this.news = res
      },
      (err) => console.error(err)
      )
  }
}
