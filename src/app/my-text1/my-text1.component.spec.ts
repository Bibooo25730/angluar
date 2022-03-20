import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyText1Component } from './my-text1.component';

describe('MyText1Component', () => {
  let component: MyText1Component;
  let fixture: ComponentFixture<MyText1Component>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyText1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyText1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
