import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { News } from 'src/app/shared/models/news';
import { NewsService } from 'src/app/shared/services/news.service';

const TIME = 500

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  listNews!: News[];
  loading: boolean = false;
  searchText= '';

  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit(): void {
    this.getNews()
  }

  getNews() {
    this.loading = true;
    setTimeout(() => {
      this.newsService.getNews()
        .pipe(
          finalize(() => this.loading = false)
        )
        .subscribe(
          (res) => this.listNews = res.response,
          (err) => console.error(err)
        )
    }, TIME);
  }

  searchNews(value: string) {
    this.searchText = value;
  }

  verifyIfExistsResults(property: string, value: string) {
    return this.listNews.some((news: any) => news[property].toLowerCase().includes(value.toLowerCase()))
  }
}
