import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from 'src/app/shared/models/news';
import { NewsService } from 'src/app/shared/services/news.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {

  newsId!: number;
  news!: News
  moreNewsList!: News[];

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.newsId = Number(this.route.snapshot.params["id"])
    if(this.newsId) {
      this.getNewsById(this.newsId);
      this.getOtherNews(this.newsId)
    }
  }

  getNewsById(id: number) {
    this.newsService.getNewsById(id)
      .subscribe(
        (res) => this.news = res,
        (err) => console.error(err)
      )
  }

  getOtherNews(id: number) {
    this.newsService.getOtherNews(id)
      .subscribe(
        (res) => this.moreNewsList = res,
        (err) => console.error(err)
      )
  }

  goBack() {
    this.location.back();
  }

}
