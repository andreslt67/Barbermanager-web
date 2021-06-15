import { TestBed } from '@angular/core/testing';

import { ServicioServicioService } from './servicio-servicio.service';

describe('ServicioServicioService', () => {
  let service: ServicioServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
