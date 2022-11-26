import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LexicalErrorComponent } from './lexical-error.component';

describe('LexicalErrorComponent', () => {
  let component: LexicalErrorComponent;
  let fixture: ComponentFixture<LexicalErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LexicalErrorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LexicalErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
