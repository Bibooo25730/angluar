import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBuildComponent } from './my-build.component';

describe('MyBuildComponent', () => {
  let component: MyBuildComponent;
  let fixture: ComponentFixture<MyBuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyBuildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
