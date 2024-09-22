import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamepickerComponent } from './gamepicker.component';

describe('GamepickerComponent', () => {
  let component: GamepickerComponent;
  let fixture: ComponentFixture<GamepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamepickerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
