import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import * as AuthActions from './user.actions';
import { UserService } from '../../user/user.service';
import { Router } from '@angular/router';
@Injectable()
export class UserEffects {
  private actions$ = inject(Actions);
  private userService = inject(UserService);
  private router = inject(Router);

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap(({ email, password }) =>
        this.userService.login({ email, password }).pipe(
          map((authResponse) => {
            this.userService.storeToken(authResponse.token);
            return AuthActions.loginSuccess({ authResponse });
          }),
          catchError((error) =>
            of(
              AuthActions.loginFailure({
                error: error.error?.message || 'Login failed',
              })
            )
          )
        )
      )
    )
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.register),
      switchMap(({ credentials }) =>
        this.userService.register(credentials).pipe(
          map((message) => {
            return AuthActions.registerSuccess({ message });
          }),
          catchError((error) =>
            of(
              AuthActions.registerFailure({
                error: error.error?.message || 'Registration failed',
              })
            )
          )
        )
      )
    )
  );
}
