import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LexicalTokenModel} from "../lexical-analysis/lexical-token.model";

@Component({
  selector: 'abjad-code-input',
  templateUrl: './code-input.component.html',
  styleUrls: ['./code-input.component.scss'],
})
export class CodeInputComponent implements OnInit {
  constructor() {}

  isFullScreen = false;

  @Input() code = '';
  @Input() focusedToken: LexicalTokenModel | undefined;
  @Output() runCode = new EventEmitter<string>();

  ngOnInit(): void {
  }

  onRunCode() {
    this.runCode.emit(this.code)
  }

  showCodeInFullScreenMode() {
    this.isFullScreen = true
  }

  closeFullScreen() {
    this.isFullScreen = false;
  }
}
