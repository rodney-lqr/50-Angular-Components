import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomcolorchangerComponent } from './randomcolorchanger.component';

describe('RandomcolorchangerComponent', () => {
  let component: RandomcolorchangerComponent;
  let fixture: ComponentFixture<RandomcolorchangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomcolorchangerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomcolorchangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
