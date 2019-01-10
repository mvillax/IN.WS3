import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Weather5Component } from './weather5.component';

describe('Weather5Component', () => {
  let component: Weather5Component;
  let fixture: ComponentFixture<Weather5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Weather5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Weather5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
