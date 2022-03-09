import { TestBed } from '@angular/core/testing';

import { MeuBixinhoService } from './meu-bixinho.service';

describe('MeuBixinhoService', () => {
  let service: MeuBixinhoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeuBixinhoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
