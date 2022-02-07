
import { Action, createReducer, on } from '@ngrx/store';

export const authFeatureKey = 'auth';

export interface State {
  user: string;
  isAuthenticated: boolean;
}

export const initialState: State = {
  user: null,
  isAuthenticated: true,
};

const loginReducer = createReducer(
  initialState,
//   on(AuthActions.loginSuccess, (state: State, { user }) => ({
//     ...state,
//     isAuthenticated: true,
//     user
//   })),
);

export function reducer(state: State | undefined, action: Action) {
  return loginReducer(state, action);
}
