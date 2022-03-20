import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuHostComponent } from './mu-host.component';

describe('MuHostComponent', () => {
  let component: MuHostComponent;
  let fixture: ComponentFixture<MuHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuHostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
