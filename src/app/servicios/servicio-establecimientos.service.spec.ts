import { TestBed } from '@angular/core/testing';

import { ServicioEstablecimientosService } from './servicio-establecimientos.service';

describe('ServicioEstablecimientosService', () => {
  let service: ServicioEstablecimientosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioEstablecimientosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
