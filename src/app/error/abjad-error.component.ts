import {Component, Input, OnInit} from '@angular/core';
import {AbjadError} from "./abjad-error";

@Component({
  selector: 'abjad-error',
  templateUrl: './abjad-error.component.html',
  styleUrls: ['./abjad-error.component.scss'],
})
export class AbjadErrorComponent implements OnInit {
  constructor() {}

  @Input() error!: AbjadError;

  ngOnInit(): void {}

  getErrorMessage() {
    return this.error.arabicMessage + '\n\n' + this.error.englishMessage;
  }
}
