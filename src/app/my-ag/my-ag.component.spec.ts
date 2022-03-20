import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAgComponent } from './my-ag.component';

describe('MyAgComponent', () => {
  let component: MyAgComponent;
  let fixture: ComponentFixture<MyAgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
