import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSecondgenComponent } from './view-secondgen.component';

describe('ViewSecondgenComponent', () => {
  let component: ViewSecondgenComponent;
  let fixture: ComponentFixture<ViewSecondgenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSecondgenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSecondgenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
