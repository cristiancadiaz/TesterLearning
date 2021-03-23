import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalloonButtonComponent } from './balloon-button.component';

describe('BalloonButtonComponent', () => {
  let component: BalloonButtonComponent;
  let fixture: ComponentFixture<BalloonButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalloonButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalloonButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
