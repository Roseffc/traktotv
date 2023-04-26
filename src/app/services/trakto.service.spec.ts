/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TraktoService } from './trakto.service';

describe('Service: Trakto', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TraktoService]
    });
  });

  it('should ...', inject([TraktoService], (service: TraktoService) => {
    expect(service).toBeTruthy();
  }));
});
