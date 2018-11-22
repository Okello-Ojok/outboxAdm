import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitAttendComponent } from './submit-attend.component';

describe('SubmitAttendComponent', () => {
  let component: SubmitAttendComponent;
  let fixture: ComponentFixture<SubmitAttendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitAttendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitAttendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
