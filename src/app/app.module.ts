import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LexicalAnalyzerService} from "./lexical-analysis/lexical-analyzer.service";
import {NzIconModule} from "ng-zorro-antd/icon";
import {LexicalAnalysisComponent} from "./lexical-analysis/lexical-analysis.component";
import {SyntaxHighlighterComponent} from "./syntax-highlighter/syntax-highlighter.component";
import {CodeInputModule} from "./code-input/code-input.module";
import {TokenModule} from "./token/token.module";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzAlertModule} from "ng-zorro-antd/alert";
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import {ParserService} from "./parsing/parser.service";
import { ParsingAnalysisComponent } from './parsing/parsing-analysis.component';
import { BindingComponent } from './parsing/binding/binding.component';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import {AbjadErrorComponent} from "./error/abjad-error.component";
import { NzModalModule } from 'ng-zorro-antd/modal';
import {InterpreterService} from "./interpreting/interpreter.service";
import { InterpretationOutputComponent } from './interpreting/interpretation-output/interpretation-output.component';
import {NzSpinModule} from "ng-zorro-antd/spin";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,

    LexicalAnalysisComponent,
    SyntaxHighlighterComponent,
    AbjadErrorComponent,
    ParsingAnalysisComponent,
    BindingComponent,
    InterpretationOutputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CodeInputModule,
    TokenModule,
    NzButtonModule,
    NzIconModule,
    NzAlertModule,
    NzTabsModule,
    NzTreeModule,
    NzCollapseModule,
    NzDividerModule,
    NzModalModule,
    NzSpinModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    LexicalAnalyzerService,
    ParserService,
    InterpreterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
