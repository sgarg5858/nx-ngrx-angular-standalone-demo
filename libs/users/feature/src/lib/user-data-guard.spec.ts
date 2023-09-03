import { TestBed } from '@angular/core/testing';

import {UserDataGuard} from './user-data-guard'

describe('UserDataGuardService', () => {
  let service: UserDataGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDataGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
