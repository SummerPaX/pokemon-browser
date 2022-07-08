import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewThirdgenComponent } from './view-thirdgen.component';

describe('ViewThirdgenComponent', () => {
  let component: ViewThirdgenComponent;
  let fixture: ComponentFixture<ViewThirdgenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewThirdgenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewThirdgenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
