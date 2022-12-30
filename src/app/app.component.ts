import { Component } from '@angular/core';
import {LexicalAnalyzerService} from "./lexical-analysis/lexical-analyzer.service";
import {LexicalTokenModel} from "./lexical-analysis/lexical-token.model";
import {ParserService} from "./parsing/parser.service";
import { mergeMap } from 'rxjs/operators';
import {AbjadError} from "./error/abjad-error";
import {InterpreterService} from "./interpreting/interpreter.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private analyzer: LexicalAnalyzerService,
              private parser: ParserService,
              private interpreter: InterpreterService) {
  }

  code = ''

  tokens: LexicalTokenModel[] = [];
  bindings: any[] = [];
  output: string = '';
  focusedToken: LexicalTokenModel | undefined;

  loading: boolean = false;

  error: AbjadError | undefined;

  ngOnInit(): void {
    this.analyzeCode();
  }

  analyzeCode() {
    this.error = undefined;
    this.tokens = [];
    this.bindings = [];

    if (this.code == '') return

    this.loading = true;
    this.analyzer.analyzeCode(this.code)
      .pipe(
        mergeMap(data => {
          this.tokens = data;
          return this.parser.parseTokens(data);
        }),
        mergeMap(bindings => {
          this.bindings = bindings
          return this.interpreter.interpretBindings(bindings)
        })
      ).subscribe({
        next: result => {
          this.output = result.output
          this.loading = false;
        },
        error: response => {
          this.error = response.error;
          this.loading = false;
        }
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
    this.bindings = [];
    this.focusedToken = undefined;
  }

  handleTokenUnfocused(token: LexicalTokenModel) {
    if (this.focusedToken == token) {
      this.focusedToken = undefined;
    }
  }
}
