import { Component } from '@angular/core';
import {LexicalAnalyzerService} from "./lexical-analysis/lexical-analyzer.service";
import {LexicalTokenModel} from "./lexical-analysis/lexical-token.model";
import {LexicalError} from "./lexical-analysis/lexical-error";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private analyzer: LexicalAnalyzerService) {
  }

  code = 'اكتب("مرحبا بالعالم")؛';

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

  onRunCode(code: string) {
    this.code = code;
    this.analyzeCode();
  }

  handleTokenFocused(token: LexicalTokenModel) {
    this.focusedToken = token;
  }

  onEditMode() {
    this.tokens = [];
    this.focusedToken = undefined;
  }

  handleTokenUnfocused(token: LexicalTokenModel) {
    if (this.focusedToken == token) {
      this.focusedToken = undefined;
    }
  }
}
