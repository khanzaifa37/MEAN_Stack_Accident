import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccidentViewComponent } from './accident-view.component';

describe('AccidentViewComponent', () => {
  let component: AccidentViewComponent;
  let fixture: ComponentFixture<AccidentViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccidentViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccidentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
