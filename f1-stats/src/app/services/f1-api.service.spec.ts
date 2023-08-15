import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { F1ApiService } from './f1-api.service';


describe('F1ApiService', () => {
  let service: F1ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(F1ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
