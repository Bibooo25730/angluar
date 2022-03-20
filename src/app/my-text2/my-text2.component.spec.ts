import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyText2Component } from './my-text2.component';

describe('MyText2Component', () => {
  let component: MyText2Component;
  let fixture: ComponentFixture<MyText2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyText2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyText2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
