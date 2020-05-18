import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccidentCreateComponent } from './accident-create.component';

describe('AccidentCreateComponent', () => {
  let component: AccidentCreateComponent;
  let fixture: ComponentFixture<AccidentCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccidentCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccidentCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
