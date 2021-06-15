import { TestBed } from '@angular/core/testing';

import { UsuarioAuntenticadorService } from './usuario-auntenticador.service';

describe('UsuarioAuntenticadorService', () => {
  let service: UsuarioAuntenticadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioAuntenticadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
