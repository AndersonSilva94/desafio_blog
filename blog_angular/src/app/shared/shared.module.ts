import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { CardNewsComponent } from './components/card-news/card-news.component';



@NgModule({
  declarations: [
    HeaderComponent,
    InputSearchComponent,
    CardNewsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    InputSearchComponent,
    CardNewsComponent
  ]
})
export class SharedModule { }
