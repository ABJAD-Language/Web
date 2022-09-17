import { Component } from '@angular/core';
import {LexicalTokenModel} from "./lexical-analysis/lexical-token.model";

@Component({
  selector: 'abjad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'lexer';
}
