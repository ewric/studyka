import { TestBed } from '@angular/core/testing';

import { MetododeestudoService } from './metododeestudo.service';

describe('MetododeestudoService', () => {
  let service: MetododeestudoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetododeestudoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
