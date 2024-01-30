import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalzadoSingleCardComponent } from './calzado-single-card.component';

describe('CalzadoSingleCardComponent', () => {
  let component: CalzadoSingleCardComponent;
  let fixture: ComponentFixture<CalzadoSingleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [CalzadoSingleCardComponent],
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalzadoSingleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
