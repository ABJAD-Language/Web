import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {LexicalTokenModel} from "../lexical-analysis/lexical-token.model";

@Component({
  selector: 'abjad-syntax-highlighter',
  templateUrl: './syntax-highlighter.component.html',
  styleUrls: ['./syntax-highlighter.component.scss'],
})
export class SyntaxHighlighterComponent implements OnInit, OnChanges {
  constructor() {}

  @Input() tokens!: LexicalTokenModel[];
  @Input() focusedToken: LexicalTokenModel | undefined;
  @Output() editMode = new EventEmitter();

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.focusedToken) {
      SyntaxHighlighterComponent.addStyleToToken(this.focusedToken);
    }

    if (changes["focusedToken"].previousValue) {
      const previousFocusedToken = changes["focusedToken"].previousValue as LexicalTokenModel;
      SyntaxHighlighterComponent.removeStyleFromToken(previousFocusedToken);
    }
  }

  private static addStyleToToken(token: LexicalTokenModel) {
    const tokenCode = document.getElementById(`line-${token.line}-index-${token.index}`);
    if (tokenCode) {
      tokenCode.classList.add('focused')
    }
  }

  private static removeStyleFromToken(token: LexicalTokenModel) {
    const tokenCode = document.getElementById(`line-${token.line}-index-${token.index}`);
    if (tokenCode) {
      tokenCode.classList.remove('focused')
    }
  }

  getTokenContent(token: LexicalTokenModel) : string {
    if (token.type == 'STRING_CONST') {
      return `"${token.content}"`
    } else if (token.type == 'COMMENT') {
      return `#${token.content}`
    }

    return token.content
  }

  onEditMode() {
    this.editMode.emit();
  }
}
