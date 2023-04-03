import { TestBed } from '@angular/core/testing';

import { MockProductsAPIInterceptor } from './mock-products-api.interceptor';

describe('MockProductsAPIInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      MockProductsAPIInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: MockProductsAPIInterceptor = TestBed.inject(MockProductsAPIInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
