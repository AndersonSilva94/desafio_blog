import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-news',
  templateUrl: './card-news.component.html',
  styleUrls: ['./card-news.component.scss']
})
export class CardNewsComponent implements OnInit {

  mockCard = {
    publicationDate: "2021-07-12T03:25:06.000Z",
    title: "Agora é oficial: o Windows 11 está vindo",
    sinopse: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.",
  }

  constructor() { }

  ngOnInit(): void {
  }

}
