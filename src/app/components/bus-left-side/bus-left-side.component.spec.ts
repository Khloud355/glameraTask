import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusLeftSideComponent } from './bus-left-side.component';

describe('BusLeftSideComponent', () => {
  let component: BusLeftSideComponent;
  let fixture: ComponentFixture<BusLeftSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusLeftSideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusLeftSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
