import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD:src/app/modules/mujer/mujer.component.spec.ts
import { MujerComponent } from './mujer.component';
=======
import { HombresComponent } from './hombres.component';
>>>>>>> main:src/app/modules/hombres/hombres.component.spec.ts

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
