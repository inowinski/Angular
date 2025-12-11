import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomComponent } from './random';

describe('Random', () => {
  let component: RandomComponent;
  let fixture: ComponentFixture<RandomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
