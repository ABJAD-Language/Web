import { Component } from '@angular/core';
import {LexicalAnalyzerService} from "./lexical-analysis/lexical-analyzer.service";
import {LexicalTokenModel} from "./lexical-analysis/lexical-token.model";
import {ParserService} from "./parsing/parser.service";
import { mergeMap } from 'rxjs/operators';
import {AbjadError} from "./lexical-error/abjad-error";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private analyzer: LexicalAnalyzerService,
              private parser: ParserService) {
  }

  // code = 'اكتب("مرحبا بالعالم")؛';
  code = `صنف انسان {
    متغير مقطع الاسم؛

  متغير رقم العمر؛

  منشئ(مقطع اسم، رقم عمر) {
  الاسم = اسم؛
  العمر = عمر؛
}


دالة تعريف(): لاشيئ {
  اكتب("انسان[العمر: " + العمر + "، الاسم: " + الاسم + "]")؛
}

}

متغير انسان محمد = انشئ انسان("محمد"، 22)؛`


  tokens: LexicalTokenModel[] = [];
  bindings: any[] = [];
  focusedToken: LexicalTokenModel | undefined;

  error: AbjadError | undefined;

  ngOnInit(): void {
    this.analyzeCode();
  }

  analyzeCode() {
    this.error = undefined;
    this.tokens = [];
    this.analyzer.analyzeCode(this.code)
      .pipe(
        mergeMap(data => {
          this.tokens = data;
          return this.parser.parseTokens(data);
        })
      ).subscribe({
        next: bindings => {
          this.bindings = bindings
        },
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
