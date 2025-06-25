import { createReducer, on } from '@ngrx/store';
import { initialCpuState } from './cpu.state';
import * as CpuActions from './cpu.actions';

export const cpuReducer = createReducer(
  initialCpuState,

  on(CpuActions.loadCpus, (state) => ({
    ...state,
    loading: true,
    error: null
  })),

  on(CpuActions.loadCpusSuccess, (state, { cpus }) => {
    const prices = cpus.map(cpu => cpu.price);
    const minPrice = prices.length > 0 ? Math.min(...prices) : 0;
    const maxPrice = prices.length > 0 ? Math.max(...prices) : 2000;

    return {
      ...state,
      cpus,
      loading: false,
      error: null,
      filters: {
        ...state.filters,
        priceRange: { min: minPrice, max: maxPrice }
      }
    };
  }),

  on(CpuActions.loadCpusFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),


  on(CpuActions.loadCpu, (state) => ({
    ...state,
    loading: true,
    error: null
  })),

  on(CpuActions.loadCpuSuccess, (state, { cpu }) => ({
    ...state,
    selectedCpu: cpu,
    loading: false,
    error: null
  })),

  on(CpuActions.loadCpuFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),

  on(CpuActions.setPriceFilter, (state, { filter }) => ({
    ...state,
    filters: {
      ...state.filters,
      priceRange: { min: filter.min, max: filter.max }
    }
  })),

  on(CpuActions.setBrandFilter, (state, { filter }) => ({
    ...state,
    filters: {
      ...state.filters,
      brand: filter.selectedBrand
    }
  })),

  on(CpuActions.setSocketFilter, (state, { filter }) => ({
    ...state,
    filters: {
      ...state.filters,
      socket: filter.selectedSocket
    }
  })),

  on(CpuActions.setCoreFilter, (state, { filter }) => ({
    ...state,
    filters: {
      ...state.filters,
      cores: filter.selectedCores.toString()
    }
  })),

  on(CpuActions.clearError, (state) => ({
    ...state,
    error: null
  })),

  on(CpuActions.resetFilters, (state) => {
    const prices = state.cpus.map(cpu => cpu.price);
    const minPrice = prices.length > 0 ? Math.min(...prices) : 0;
    const maxPrice = prices.length > 0 ? Math.max(...prices) : 2000;

    return {
      ...state,
      filters: {
        ...initialCpuState.filters,
        priceRange: { min: minPrice, max: maxPrice }
      }
    };
  })
);
