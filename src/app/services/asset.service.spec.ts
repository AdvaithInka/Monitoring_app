import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AssetService } from './asset.service';

describe('MonitoringJobsService', () => {
  let service: AssetService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AssetService]
    });
    service = TestBed.inject(AssetService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all assets', () => {
    const dummyAssets = [{ id: 1, name: 'Asset 1' }, { id: 2, name: 'Asset 2' }];

    service.getAllAssets().subscribe(assets => {
      expect(assets.length).toBe(2);
      expect(assets).toEqual(dummyAssets);
    });

    const req = httpMock.expectOne(service['apiUrl']);
    expect(req.request.method).toBe('GET');
    req.flush(dummyAssets);
  });

  it('should search assets with params', () => {
    const dummyAssets = [{ id: 1, name: 'Asset 1' }];
    const searchParams = { name: 'Asset 1' };

    service.searchAssets(searchParams).subscribe(assets => {
      expect(assets.length).toBe(1);
      expect(assets).toEqual(dummyAssets);
    });

    const req = httpMock.expectOne(req => req.url === service['apiUrl'] && req.params.get('name') === 'Asset 1');
    expect(req.request.method).toBe('GET');
    req.flush(dummyAssets);
  });
});