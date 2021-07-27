import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeAlertComponent } from './some-alert.component';

describe('SomeAlertComponent', () => {
  let component: SomeAlertComponent;
  let fixture: ComponentFixture<SomeAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomeAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
