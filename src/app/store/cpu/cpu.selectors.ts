import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CpuState } from './cpu.state';

export const selectCpuState = createFeatureSelector<CpuState>('cpu');

export const selectAllCpus = createSelector(
  selectCpuState,
  (state) => state.cpus
);

export const selectSelectedCpu = createSelector(
  selectCpuState,
  (state) => state.selectedCpu
);

export const selectCpuLoading = createSelector(
  selectCpuState,
  (state) => state.loading
);

export const selectCpuError = createSelector(
  selectCpuState,
  (state) => state.error
);

export const selectCpuFilters = createSelector(
  selectCpuState,
  (state) => state.filters
);

export const selectFilteredCpus = createSelector(
  selectAllCpus,
  selectCpuFilters,
  (cpus, filters) => {
    if (!cpus || !Array.isArray(cpus) || !filters) {
      return [];
    }

    return cpus.filter((cpu) => {
      const priceMatch = cpu.price >= filters.priceRange.min &&
                        cpu.price <= filters.priceRange.max;

      const brandMatch = filters.brand === 'All' ||
                        cpu.brand === filters.brand;

      const socketMatch = filters.socket === 'All' ||
                         cpu.socket === filters.socket;

      const coreMatch = filters.cores === 'All' ||
                       cpu.cores.toString() === filters.cores;

      return priceMatch && brandMatch && socketMatch && coreMatch;
    });
  }
);

export const selectAvailableBrands = createSelector(
  selectAllCpus,
  (cpus) => {
    if (!cpus || !Array.isArray(cpus)) {
      return ['All'];
    }
    const brands = [...new Set(cpus.map(cpu => cpu.brand))];
    return ['All', ...brands.sort()];
  }
);

export const selectAvailableSockets = createSelector(
  selectAllCpus,
  (cpus) => {
    if (!cpus || !Array.isArray(cpus)) {
      return ['All'];
    }
    const sockets = [...new Set(cpus.map(cpu => cpu.socket))];
    return ['All', ...sockets.sort()];
  }
);

export const selectAvailableCores = createSelector(
  selectAllCpus,
  (cpus) => {
    if (!cpus || !Array.isArray(cpus)) {
      return ['All'];
    }
    const cores = [...new Set(cpus.map(cpu => cpu.cores.toString()))];
    return ['All', ...cores.sort((a, b) => {
      if (a === 'All') return -1;
      if (b === 'All') return 1;
      return parseInt(a) - parseInt(b);
    })];
  }
);

export const selectAvailablePriceRange = createSelector(
  selectAllCpus,
  (cpus) => {
    if (!cpus || !Array.isArray(cpus) || cpus.length === 0) {
      return { min: 0, max: 2000 };
    }
    const prices = cpus.map(cpu => cpu.price);
    return {
      min: Math.min(...prices),
      max: Math.max(...prices)
    };
  }
);
