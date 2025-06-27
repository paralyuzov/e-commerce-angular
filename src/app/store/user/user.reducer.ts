import { createReducer, on } from '@ngrx/store';
import { initialAuthState } from './user.state';
import * as AuthActions from './user.actions';

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.login, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(AuthActions.loginSuccess, (state, { authResponse }) => ({
    ...state,
    user: authResponse.user,
    token: authResponse.token,
    isAuthenticated: true,
    loading: false,
    error: null,
  })),
  on(AuthActions.loginFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
    isAuthenticated: false,
  })),
  on(AuthActions.register, (state) => ({
    ...state,
    loading: true,
    error: null,
    registrationSuccess: false,
  })),
  on(AuthActions.registerSuccess, (state, { message }) => ({
    ...state,
    isAuthenticated: false,
    loading: false,
    error: null,
    registrationSuccess: true,
  })),
  on(AuthActions.registerFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
    isAuthenticated: false,
    registrationSuccess: false,
  })),
  on(AuthActions.logout, (state) => ({
    ...state,
    loading: true,
  })),

  on(AuthActions.logoutSuccess, () => ({
    ...initialAuthState,
  })),

  on(AuthActions.autoLogin, (state) => ({
    ...state,
    loading: true,
  })),

  on(AuthActions.autoLoginSuccess, (state, { user, token }) => ({
    ...state,
    user,
    token,
    isAuthenticated: true,
    loading: false,
    error: null,
  })),

  on(AuthActions.autoLoginFailure, (state) => ({
    ...state,
    loading: false,
    isAuthenticated: false,
  })),

  on(AuthActions.clearError, (state) => ({
    ...state,
    error: null,
    registrationSuccess: false,
  }))
);
