import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WPageComponent } from './wpage.component';

describe('WPageComponent', () => {
  let component: WPageComponent;
  let fixture: ComponentFixture<WPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
