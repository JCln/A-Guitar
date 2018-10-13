import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallProtectedApiComponent } from './call-protected-api.component';

describe('CallProtectedApiComponent', () => {
  let component: CallProtectedApiComponent;
  let fixture: ComponentFixture<CallProtectedApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallProtectedApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallProtectedApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
