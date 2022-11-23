import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LexicalAnalyzerService} from "./lexical-analyzer.service";
import {LexicalTokenModel} from "./lexical-token.model";
import {LexicalError} from "./lexical-error";

@Component({
  selector: 'abjad-lexical-analysis',
  templateUrl: './lexical-analysis.component.html',
  styleUrls: ['./lexical-analysis.component.scss'],
})
export class LexicalAnalysisComponent {

  @Input() tokens: LexicalTokenModel[] = [];
  @Output() tokenFocused = new EventEmitter<LexicalTokenModel>()
  @Output() tokenUnfocused = new EventEmitter<LexicalTokenModel>()

  error: LexicalError | undefined;

  handleTokenFocused(token: LexicalTokenModel) {
    this.tokenFocused.emit(token)
  }

  handleTokenUnfocused(token: LexicalTokenModel) {
    this.tokenUnfocused.emit(token)
  }
}
