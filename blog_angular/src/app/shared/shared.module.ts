import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { CardNewsComponent } from './components/card-news/card-news.component';
import { FooterComponent } from './components/footer/footer.component';
import { SectionMoreNewsComponent } from './components/section-more-news/section-more-news.component';
import { NotFoundComponent } from './components/not-found/not-found.component';



@NgModule({
  declarations: [
    HeaderComponent,
    InputSearchComponent,
    CardNewsComponent,
    FooterComponent,
    SectionMoreNewsComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    InputSearchComponent,
    CardNewsComponent,
    FooterComponent,
    SectionMoreNewsComponent,
    NotFoundComponent
  ]
})
export class SharedModule { }
