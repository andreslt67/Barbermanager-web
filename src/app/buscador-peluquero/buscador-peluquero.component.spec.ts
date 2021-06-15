import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorPeluqueroComponent } from './buscador-peluquero.component';

describe('BuscadorPeluqueroComponent', () => {
  let component: BuscadorPeluqueroComponent;
  let fixture: ComponentFixture<BuscadorPeluqueroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscadorPeluqueroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorPeluqueroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
