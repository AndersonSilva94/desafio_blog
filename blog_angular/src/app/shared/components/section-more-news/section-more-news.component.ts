import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { News } from 'src/app/shared/models/news';

@Component({
  selector: 'app-section-more-news',
  templateUrl: './section-more-news.component.html',
  styleUrls: ['./section-more-news.component.scss']
})
export class SectionMoreNewsComponent implements OnInit {

  @Input() newsList!: News[];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToNews(id: number) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([`/news-details/${id}`])
  }

}
