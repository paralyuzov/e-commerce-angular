import { createAction, props } from '@ngrx/store';
import {
  CPU,
  PriceFilter,
  BrandFilter,
  SocketFilter,
  CoreFilter,
} from '../../interfaces/cpu.interface';

export const loadCpus = createAction('[CPU API] Load CPUs');
export const loadCpusSuccess = createAction(
  '[CPU API] Load CPUs Success',
  props<{ cpus: CPU[] }>()
);
export const loadCpusFailure = createAction(
  '[CPU API] Load CPUs Failure',
  props<{ error: string }>()
);

export const loadCpu = createAction(
  '[CPU API] Load CPU',
  props<{ id: string }>()
);

export const loadCpuSuccess = createAction(
  '[CPU API] Load CPU Success',
  props<{ cpu: CPU }>()
);

export const loadCpuFailure = createAction(
  '[CPU API] Load CPU Failure',
  props<{ error: string }>()
);

export const setPriceFilter = createAction(
  '[CPU Filter] Set Price Filter',
  props<{ filter: PriceFilter }>()
);

export const setBrandFilter = createAction(
  '[CPU Filter] Set Brand Filter',
  props<{ filter: BrandFilter }>()
);

export const setSocketFilter = createAction(
  '[CPU Filter] Set Socket Filter',
  props<{ filter: SocketFilter }>()
);

export const setCoreFilter = createAction(
  '[CPU Filter] Set Core Filter',
  props<{ filter: CoreFilter }>()
);

export const clearError = createAction('[CPU] Clear Error');
export const resetFilters = createAction('[CPU] Reset Filters');
