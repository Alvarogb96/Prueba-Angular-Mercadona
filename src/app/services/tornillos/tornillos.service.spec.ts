import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { TornillosService } from './tornillos.service';

describe('TornillosService', () => {
  let service: TornillosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(TornillosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
