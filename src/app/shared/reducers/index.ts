import { InjectionToken } from '@angular/core';
import {
  ActionReducerMap,
  MetaReducer,
  ActionReducer
} from '@ngrx/store';

import { storageSync } from '@larscom/ngrx-store-storagesync';
//import { AuthActions } from '@core/actions';
import * as fromAuth from './auth.reducer';

export interface State {
  [fromAuth.authFeatureKey]: fromAuth.State;
}

export const reducers = new InjectionToken<ActionReducerMap<State>>(
  'reducers',
  {
    factory: () => ({
      [fromAuth.authFeatureKey]: fromAuth.reducer,
    })
  }
);

export function sessionStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return storageSync<State>({
    features: [
      { stateKey: fromAuth.authFeatureKey },
    ],
    storage: window.sessionStorage
  })(reducer);
}


export const metaReducers: MetaReducer<State>[] = [sessionStorageSyncReducer];
