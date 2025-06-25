import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { CpuService } from '../../cpu/cpu.service';
import * as CpuActions from './cpu.actions';

@Injectable()
export class CpuEffects {
  private actions$ = inject(Actions);
  private cpuService = inject(CpuService);

  loadCpus$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CpuActions.loadCpus),
      switchMap(() =>
        this.cpuService.getAllCPUs().pipe(
          map(cpus => CpuActions.loadCpusSuccess({ cpus })),
          catchError(error => of(CpuActions.loadCpusFailure({
            error: error.message || 'Failed to load CPUs'
          })))
        )
      )
    )
  );
}
