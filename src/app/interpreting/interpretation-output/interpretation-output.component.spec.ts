import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpretationOutputComponent } from './interpretation-output.component';

describe('InterpretationOutputComponent', () => {
  let component: InterpretationOutputComponent;
  let fixture: ComponentFixture<InterpretationOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterpretationOutputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterpretationOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
