import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsDetailsComponent } from 'src/app/pages/news-details/news-details.component';

const routes: Routes = [
  { path: ':id', component: NewsDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsDetailsRoutingModule { }
