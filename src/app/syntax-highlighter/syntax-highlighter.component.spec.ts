import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyntaxHighlighterComponent } from './syntax-highlighter.component';

describe('SyntaxHighlighterComponent', () => {
  let component: SyntaxHighlighterComponent;
  let fixture: ComponentFixture<SyntaxHighlighterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SyntaxHighlighterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SyntaxHighlighterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
