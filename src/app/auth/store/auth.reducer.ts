import {
  Action,
  createFeatureSelector,
  createReducer,
  createSelector,
  on
} from '@ngrx/store';
import {
  signInRequest,
  signInSuccess,
  signInError,
  signUpRequest,
  signUpSuccess,
  signUpError,
  changePasswordError,
  changePasswordRequest,
  changePasswordSuccess
} from './auth.actions';
import { CredentialsModel } from './../models/credentials.model';
import {
  RequestState,
  NotAskedRequest,
  SuccessfulRequest,
  FailedRequest,
  InProgressRequest
} from '../../shared/models/request-state.model';

export const authFeatureKey = 'auth';

export interface AuthState {
  credentials: CredentialsModel;
  requests: {
    signIn: RequestState;
    signUp: RequestState;
    changePassword: RequestState;
  };
}

const initialState: AuthState = {
  credentials: null,
  requests: {
    signIn: new NotAskedRequest(),
    signUp: new NotAskedRequest(),
    changePassword: new NotAskedRequest()
  }
};

export const authReducer = createReducer(
  initialState,
  on(signInRequest, (state) => ({
    ...state,
    requests: {
      ...state.requests,
      signIn: new InProgressRequest()
    }
  })),
  on(signInSuccess, (state, { credentials }) => ({
    ...state,
    credentials: credentials,
    requests: {
      ...state.requests,
      signIn: new SuccessfulRequest()
    }
  })),
  on(signInError, (state, { httpError }) => ({
    ...state,
    requests: {
      ...state.requests,
      signIn: new FailedRequest(httpError)
    }
  })),
  on(signUpRequest, (state) => ({
    ...state
  })),
  on(signUpSuccess, (state, { credentials }) => ({
    ...state,
    credentials: credentials,
    requests: {
      ...state.requests,
      signUp: new SuccessfulRequest()
    }
  })),
  on(signUpError, (state, { httpError }) => ({
    ...state,
    requests: {
      ...state.requests,
      signUp: new FailedRequest(httpError)
    }
  })),
  on(changePasswordRequest, (state) => ({
    ...state,
    requests: {
      ...state.requests,
      changePassword: new InProgressRequest()
    }
  })),
  on(changePasswordSuccess, (state) => ({
    ...state,
    requests: {
      ...state.requests,
      changePassword: new SuccessfulRequest()
    }
  })),
  on(changePasswordError, (state, { httpError }) => ({
    ...state,
    requests: {
      ...state.requests,
      changePassword: new FailedRequest(httpError)
    }
  }))
);

export function reducer(
  state: AuthState | undefined,
  action: Action
): AuthState {
  return authReducer(state, action);
}

export const getAuthState = createFeatureSelector<AuthState>('auth');
export const getCredentials = createSelector(
  getAuthState,
  (state: AuthState) => state.credentials
);
export const getSignInRequestState = createSelector(
  getAuthState,
  (state: AuthState) => state.requests.signIn
);
export const getSignUpRequestState = createSelector(
  getAuthState,
  (state: AuthState) => state.requests.signUp
);
export const getChangePasswordRequestState = createSelector(
  getAuthState,
  (state: AuthState) => state.requests.changePassword
);
