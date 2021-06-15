import { TestBed } from '@angular/core/testing';

import { ServicioResenasService } from './servicio-resenas.service';

describe('ServicioResenasService', () => {
  let service: ServicioResenasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioResenasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
