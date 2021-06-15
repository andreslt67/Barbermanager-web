import { TestBed } from '@angular/core/testing';

import { ServicioFotoService } from './servicio-foto.service';

describe('ServicioFotoService', () => {
  let service: ServicioFotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioFotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
