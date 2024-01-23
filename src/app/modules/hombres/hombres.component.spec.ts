import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HombresComponent } from './hombres.component';

describe('DashboardComponent', () => {
  let component: HombresComponent;
  let fixture: ComponentFixture<HombresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [HombresComponent],
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HombresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
