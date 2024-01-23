import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD:src/app/modules/mujer/components/accesorios/nft-header/nft-header.component.spec.ts
import { NftHeaderComponent } from './nft-header.component';

describe('NftHeaderComponent', () => {
  let component: NftHeaderComponent;
  let fixture: ComponentFixture<NftHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [NftHeaderComponent],
=======
import { CalzadoComponent } from './calzado.component';

describe('CalzadoComponent', () => {
  let component: CalzadoComponent;
  let fixture: ComponentFixture<CalzadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [CalzadoComponent],
>>>>>>> main:src/app/modules/hombres/pages/calzado/calzado.component.spec.ts
}).compileComponents();
  });

  beforeEach(() => {
<<<<<<< HEAD:src/app/modules/mujer/components/accesorios/nft-header/nft-header.component.spec.ts
    fixture = TestBed.createComponent(NftHeaderComponent);
=======
    fixture = TestBed.createComponent(CalzadoComponent);
>>>>>>> main:src/app/modules/hombres/pages/calzado/calzado.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
