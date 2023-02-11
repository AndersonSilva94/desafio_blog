import { AfterViewInit, Component, OnInit } from '@angular/core';
import { News } from 'src/app/shared/models/news';
import { NewsService } from 'src/app/shared/services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  listNews!: News[];
  loading: boolean = false;
  searchText= '';

  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit(): void {
    this.getNews()
  }

  ngAfterViewInit(): void {
    // this.searchNews()
  }

  getNews() {
    this.newsService.getNews()
      .subscribe(
        (res) => this.listNews = res.response,
        (err) => console.error(err)
      )
  }

  searchNews(value: string) {
    this.searchText = value;
    console.log(this.searchText)

  }
}
