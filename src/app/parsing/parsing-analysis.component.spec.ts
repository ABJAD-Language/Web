import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParsingAnalysisComponent } from './parsing-analysis.component';

describe('ParsingAnalysisComponent', () => {
  let component: ParsingAnalysisComponent;
  let fixture: ComponentFixture<ParsingAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParsingAnalysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParsingAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
