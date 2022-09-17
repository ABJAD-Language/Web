import {Component, OnInit} from '@angular/core';
import {LexicalAnalyzerService} from "./lexical-analyzer.service";
import {LexicalTokenModel} from "./lexical-token.model";
import {LexicalError} from "./lexical-error";

@Component({
  selector: 'abjad-lexical-analysis',
  templateUrl: './lexical-analysis.component.html',
  styleUrls: ['./lexical-analysis.component.scss'],
})
export class LexicalAnalysisComponent implements OnInit {
  constructor(private analyzer: LexicalAnalyzerService) {
  }

  code = '';

  tokens: LexicalTokenModel[] = [];
  focusedToken: LexicalTokenModel | undefined;

  error: LexicalError | undefined;

  ngOnInit(): void {
    this.analyzeCode();
  }

  analyzeCode() {
    this.error = undefined;
    this.tokens = [];
    this.analyzer.analyzeCode(this.code).subscribe({
      next: data => this.tokens = data,
      error: response => this.error = response.error
    });
  }

  onCodeChange(code: string) {
    this.code = code;
    this.analyzeCode();
  }

  handleTokenFocused(token: LexicalTokenModel) {
    this.focusedToken = token;
  }

  editMode() {
    this.tokens = [];
    this.focusedToken = undefined;
  }

  handleTokenUnfocused(token: LexicalTokenModel) {
    if (this.focusedToken == token) {
      this.focusedToken = undefined;
    }
  }
}
