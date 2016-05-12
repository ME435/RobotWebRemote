import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { FirebaseStateService } from './firebase-state.service';

describe('FirebaseState Service', () => {
  beforeEachProviders(() => [FirebaseStateService]);

  it('should ...',
      inject([FirebaseStateService], (service: FirebaseStateService) => {
    expect(service).toBeTruthy();
  }));
});
