import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from './../api/auth.service';
import {
  signInRequest,
  signInError,
  signInSuccess,
  signUpRequest,
  signUpSuccess,
  signUpError
} from './auth.actions';
import { of } from 'rxjs';
import { map, catchError, exhaustMap } from 'rxjs/operators';
import { credentialsDecoder } from './../models/credentials.model';

@Injectable()
export class AuthEffects {
  signInRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(signInRequest),
      exhaustMap((action) =>
        this.authService.signIn(action.signIn).pipe(
          map((credentials) =>
            signInSuccess({
              credentials: credentialsDecoder.decodeAny(credentials)
            })
          ),
          catchError((error) => of(signInError({ httpError: error })))
        )
      )
    )
  );

  signUpRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(signUpRequest),
      exhaustMap((action) =>
        this.authService.signUp(action.signUp).pipe(
          map((credentials) =>
            signUpSuccess({
              credentials: credentialsDecoder.decodeAny(credentials)
            })
          ),
          catchError((error) => {
            if (error.status == 400) {
              console.log(error);
            }
            return of(signUpError({ httpError: error }));
          })
        )
      )
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
