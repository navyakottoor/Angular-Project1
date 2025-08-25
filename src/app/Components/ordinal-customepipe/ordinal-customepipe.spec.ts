import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdinalCustomepipe } from './ordinal-customepipe';

describe('OrdinalCustomepipe', () => {
  let component: OrdinalCustomepipe;
  let fixture: ComponentFixture<OrdinalCustomepipe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdinalCustomepipe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdinalCustomepipe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
