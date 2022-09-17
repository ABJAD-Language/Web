import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { CodeInputModule } from './code-input/code-input.module';
import { LexicalAnalysisComponent } from './lexical-analysis/lexical-analysis.component';
import { LexicalAnalyzerService } from './lexical-analysis/lexical-analyzer.service';
import { HttpClientModule } from '@angular/common/http';
import { TokenComponent } from './token/token.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { TokenModule } from './token/token.module';
import { SyntaxHighlighterComponent } from './syntax-highlighter/syntax-highlighter.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { LexicalErrorComponent } from './lexical-analysis/lexical-error/lexical-error.component';
import {NzAlertModule} from "ng-zorro-antd/alert";

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    LexicalAnalysisComponent,
    SyntaxHighlighterComponent,
    LexicalErrorComponent,
  ],
    imports: [
        BrowserModule,
        CodeInputModule,
        TokenModule,
        HttpClientModule,
        NzButtonModule,
        NzIconModule,
        NzAlertModule,
    ],
  providers: [LexicalAnalyzerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
