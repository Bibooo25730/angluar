import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighSelfComponent } from './high-self.component';

describe('HighSelfComponent', () => {
  let component: HighSelfComponent;
  let fixture: ComponentFixture<HighSelfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighSelfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighSelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
