import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { CardNewsComponent } from './components/card-news/card-news.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    InputSearchComponent,
    CardNewsComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    InputSearchComponent,
    CardNewsComponent,
    FooterComponent
  ]
})
export class SharedModule { }
