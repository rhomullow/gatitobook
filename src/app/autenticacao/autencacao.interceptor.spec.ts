import { TestBed } from '@angular/core/testing';

import { AutencacaoInterceptor } from './autencacao.interceptor';

describe('AutencacaoInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AutencacaoInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AutencacaoInterceptor = TestBed.inject(AutencacaoInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
