import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarehnheittocelciusComponent } from './farehnheittocelcius.component';

describe('FarehnheittocelciusComponent', () => {
  let component: FarehnheittocelciusComponent;
  let fixture: ComponentFixture<FarehnheittocelciusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FarehnheittocelciusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarehnheittocelciusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
