import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LexicalTokenModel} from "./lexical-token.model";

@Component({
  selector: 'abjad-lexical-analysis',
  templateUrl: './lexical-analysis.component.html',
  styleUrls: ['./lexical-analysis.component.scss'],
})
export class LexicalAnalysisComponent {

  @Input() tokens: LexicalTokenModel[] = [];
  @Output() tokenFocused = new EventEmitter<LexicalTokenModel>()
  @Output() tokenUnfocused = new EventEmitter<LexicalTokenModel>()

  handleTokenFocused(token: LexicalTokenModel) {
    this.tokenFocused.emit(token)
  }

  handleTokenUnfocused(token: LexicalTokenModel) {
    this.tokenUnfocused.emit(token)
  }

  getTokensExcludingSpaces() {
    return this.tokens.filter(t => t.type != 'WHITE_SPACE')
  }
}
