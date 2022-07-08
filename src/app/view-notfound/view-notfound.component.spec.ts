import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNotfoundComponent } from './view-notfound.component';

describe('ViewNotfoundComponent', () => {
  let component: ViewNotfoundComponent;
  let fixture: ComponentFixture<ViewNotfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewNotfoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewNotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
