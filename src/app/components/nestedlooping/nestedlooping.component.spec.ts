import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedloopingComponent } from './nestedlooping.component';

describe('NestedloopingComponent', () => {
  let component: NestedloopingComponent;
  let fixture: ComponentFixture<NestedloopingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NestedloopingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedloopingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
