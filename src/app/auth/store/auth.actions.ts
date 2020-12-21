import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { CredentialsModel } from './../models/credentials.model';
import { SignInModel } from './../models/signin.model';
import { SignUpModel } from './../models/signup.model';

const PREFIX = '[AUTH]';

export const signInRequest = createAction(
  `${PREFIX} SIGNIN REQUEST`,
  props<{ signIn: SignInModel }>()
);
export const signInSuccess = createAction(
  `${PREFIX} SIGNIN SUCCESS`,
  props<{ credentials: CredentialsModel }>()
);
export const signInError = createAction(
  `${PREFIX} SIGNIN ERROR`,
  props<{ httpError: HttpErrorResponse }>()
);
export const signUpRequest = createAction(
  `${PREFIX} SIGNUP REQUEST`,
  props<{ signUp: SignUpModel }>()
);
export const signUpSuccess = createAction(
  `${PREFIX} SIGNUP SUCCESS`,
  props<{ credentials: CredentialsModel }>()
);
export const signUpError = createAction(
  `${PREFIX} SIGNUP ERROR`,
  props<{ httpError: HttpErrorResponse }>()
);
export const changePasswordRequest = createAction(
  `${PREFIX} CHANGE PASSWORD REQUEST`,
  props<{ email: string }>()
);
export const changePasswordSuccess = createAction(
  `${PREFIX} CHANGE PASSWORD SUCCESS`
);
export const changePasswordError = createAction(
  `${PREFIX} CHANGE PASSWORD ERROR`,
  props<{ httpError: HttpErrorResponse }>()
);
