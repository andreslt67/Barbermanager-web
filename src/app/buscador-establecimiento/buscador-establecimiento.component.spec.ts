import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorEstablecimientoComponent } from './buscador-establecimiento.component';

describe('BuscadorEstablecimientoComponent', () => {
  let component: BuscadorEstablecimientoComponent;
  let fixture: ComponentFixture<BuscadorEstablecimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscadorEstablecimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorEstablecimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
