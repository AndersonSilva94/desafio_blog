import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from 'src/app/shared/models/news';
import { NewsService } from 'src/app/shared/services/news.service';

const TIME = 500;

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {

  newsId!: number;
  news!: News
  moreNewsList!: News[];
  loading: boolean = false

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.newsId = Number(this.route.snapshot.params["id"])
    if(this.newsId) {
      this.loading = true
      setTimeout(() => {
        this.getNewsById(this.newsId);
        this.getOtherNews(this.newsId);
        this.loading = false
      }, TIME);
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

  likeNews() {
    const img = document.querySelector('.img-like') as HTMLImageElement
    if(img.src.includes('assets/images/like.svg')) {
      img.src = '../../../../assets/images/unlike.svg'
    } else {
      img.src = '../../../../assets/images/like.svg'
    }
  }

}
