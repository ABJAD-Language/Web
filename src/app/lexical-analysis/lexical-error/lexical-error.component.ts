import {Component, Input, OnInit} from '@angular/core';
import {LexicalError} from "../lexical-error";

@Component({
  selector: 'abjad-lexical-error',
  templateUrl: './lexical-error.component.html',
  styleUrls: ['./lexical-error.component.scss'],
})
export class LexicalErrorComponent implements OnInit {
  constructor() {}

  @Input() error!: LexicalError;

  ngOnInit(): void {}

  getErrorMessage() {
    return this.error.arabicMessage + '\n\n' + this.error.englishMessage;
  }
}
