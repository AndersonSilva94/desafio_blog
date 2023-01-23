import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, finalize, switchMap, tap } from 'rxjs';
import { GeneralService } from '../../services/general.service';
import { NewsService } from '../../services/news.service';

const TIME = 500

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss']
})
export class InputSearchComponent implements OnInit {
  inputForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private newsService: NewsService,
    private generalService: GeneralService
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.getValue()
  }

  buildForm() {
    this.inputForm = this.fb.group({
      search: ['']
    })
  }

  getValue() {
    if(this.inputForm.get('search')?.value === "") {
      return;
    } else {
      this.inputForm.get('search')?.valueChanges
      .pipe(
        filter(val => val.length > 1),
        debounceTime(TIME),
        distinctUntilChanged(),
        switchMap(
          (val) => this.newsService.getNewsByFilter(val)
        )
      )
      .subscribe(
        (res) => this.generalService.setResultsArrBySearch(res)
      )
    }
  }

}
