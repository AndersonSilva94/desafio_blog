import { Component, Input, OnInit } from '@angular/core';
import { News } from 'src/app/shared/models/news';

@Component({
  selector: 'app-card-news',
  templateUrl: './card-news.component.html',
  styleUrls: ['./card-news.component.scss']
})
export class CardNewsComponent implements OnInit {

  @Input() listNews!: News[]

  constructor() { }

  ngOnInit(): void {
  }

}
