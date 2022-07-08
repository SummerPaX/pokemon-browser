import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFirstgenComponent } from './view-firstgen.component';

describe('ViewFirstgenComponent', () => {
  let component: ViewFirstgenComponent;
  let fixture: ComponentFixture<ViewFirstgenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFirstgenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewFirstgenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
