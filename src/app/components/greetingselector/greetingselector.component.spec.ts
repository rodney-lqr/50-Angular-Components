import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingselectorComponent } from './greetingselector.component';

describe('GreetingselectorComponent', () => {
  let component: GreetingselectorComponent;
  let fixture: ComponentFixture<GreetingselectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreetingselectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreetingselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
