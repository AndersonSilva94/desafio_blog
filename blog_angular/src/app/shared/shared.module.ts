import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { InputSearchComponent } from './components/input-search/input-search.component';



@NgModule({
  declarations: [
    HeaderComponent,
    InputSearchComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    InputSearchComponent
  ]
})
export class SharedModule { }
