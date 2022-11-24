import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/shared/models/news';
import { NewsService } from 'src/app/shared/services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  news: News[] = []

  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit(): void {
    this.getNews();
  }

  getNews() {
    this.newsService.getNews()
      .subscribe(
        (res) => this.news = res.response,
        (err) => console.error(err)
      )
  }

}
