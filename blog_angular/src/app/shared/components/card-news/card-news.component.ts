import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { News } from 'src/app/shared/models/news';

@Component({
  selector: 'app-card-news',
  templateUrl: './card-news.component.html',
  styleUrls: ['./card-news.component.scss']
})
export class CardNewsComponent implements OnInit {

  @Input() listNews!: News[]

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToNews(id: number) {
    this.router.navigate([`/news-details/${id}`])
  }

  likeNews(i: number) {
    const imgsLike = document.querySelectorAll('.img-like') as NodeListOf<HTMLImageElement>
    imgsLike.forEach((img, index) => {
      if (index === i) {
        if(img.src.includes('assets/images/like.svg')) {
          img.src = '../../../../assets/images/unlike.svg'
        } else {
          img.src = '../../../../assets/images/like.svg'
        }
      } else {
        img.src =  '../../../../assets/images/unlike.svg'
      }
    })
  }

}
