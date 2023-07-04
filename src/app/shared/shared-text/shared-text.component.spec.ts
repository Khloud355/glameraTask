import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedTextComponent } from './shared-text.component';

describe('SharedTextComponent', () => {
  let component: SharedTextComponent;
  let fixture: ComponentFixture<SharedTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
