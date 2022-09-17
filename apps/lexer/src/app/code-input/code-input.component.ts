import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LexicalTokenModel} from "../lexical-analysis/lexical-token.model";

@Component({
  selector: 'abjad-code-input',
  templateUrl: './code-input.component.html',
  styleUrls: ['./code-input.component.scss'],
})
export class CodeInputComponent implements OnInit {
  constructor() {}

  @Input() code = '';
  @Input() focusedToken: LexicalTokenModel | undefined;
  @Output() codeChange = new EventEmitter<string>();

  ngOnInit(): void {
  }

  onCodeChange() {
    this.codeChange.emit(this.code)
  }
}
