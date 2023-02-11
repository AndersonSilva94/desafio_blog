import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss']
})
export class InputSearchComponent implements OnInit {
  @Output() valueChanged: EventEmitter<string> = new EventEmitter<string>();
  inputValue: string = '';

  ngOnInit(): void {
  }

  getValue() {
    this.valueChanged.emit(this.inputValue)
  }

}
