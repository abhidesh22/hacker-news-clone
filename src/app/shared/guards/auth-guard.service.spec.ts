import { TestBed } from '@angular/core/testing';

import { AuthGuardService } from './auth-guard.service';

describe('#authGuardService', () => {
  let service: AuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it("should be authenticated", ()=>{
    expect(service.canActivate(null, null)).toBe(true);
  });
});