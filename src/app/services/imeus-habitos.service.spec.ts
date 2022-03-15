import { TestBed } from '@angular/core/testing';

import { IMeusHabitosService } from './imeus-habitos.service';

describe('IMeusHabitosService', () => {
  let service: IMeusHabitosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IMeusHabitosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
