import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LexicalTokenModel} from "../lexical-analysis/lexical-token.model";

@Component({
  selector: 'abjad-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.scss'],
})
export class TokenComponent implements OnInit {
  constructor() {}

  @Input() lexicalToken!: LexicalTokenModel;
  @Output() focused = new EventEmitter<LexicalTokenModel>();
  @Output() unFocused = new EventEmitter<LexicalTokenModel>();

  ngOnInit(): void {}

  tokenFocus() {
    this.focused.emit(this.lexicalToken);
  }

  tokenUnfocus() {
    this.unFocused.emit(this.lexicalToken);
  }
}
