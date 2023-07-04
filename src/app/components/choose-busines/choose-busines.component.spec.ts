import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseBusinesComponent } from './choose-busines.component';

describe('ChooseBusinesComponent', () => {
  let component: ChooseBusinesComponent;
  let fixture: ComponentFixture<ChooseBusinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseBusinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseBusinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
