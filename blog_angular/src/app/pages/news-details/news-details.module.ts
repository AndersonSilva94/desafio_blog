import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsDetailsComponent } from 'src/app/pages/news-details/news-details.component';
import { NewsDetailsRoutingModule } from 'src/app/pages/news-details/news-details-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    NewsDetailsComponent
  ],
  imports: [
    CommonModule,
    NewsDetailsRoutingModule,
    SharedModule
  ]
})
export class NewsDetailsModule { }
