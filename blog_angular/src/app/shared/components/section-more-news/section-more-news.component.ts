import { Component, Input, OnInit } from '@angular/core';
import { News } from 'src/app/shared/models/news';

@Component({
  selector: 'app-section-more-news',
  templateUrl: './section-more-news.component.html',
  styleUrls: ['./section-more-news.component.scss']
})
export class SectionMoreNewsComponent implements OnInit {

  @Input() newsList!: News[];

  constructor() { }

  ngOnInit(): void {
  }

}
