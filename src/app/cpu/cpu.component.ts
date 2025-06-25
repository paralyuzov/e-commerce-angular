import { Component, signal, OnInit, inject, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { DataviewComponent } from '../ui/dataview/dataview.component';
import {
  PriceFilter,
  BrandFilter,
  SocketFilter,
  CoreFilter,
} from '../interfaces/cpu.interface';
import { FilterPriceComponent } from './filter-price/filter-price.component';
import { FilterBrandComponent } from './filter-brand/filter-brand.component';
import { FilterSocketComponent } from './filter-socket/filter-socket.component';
import { FilterCoresComponent } from './filter-cores/filter-cores.component';
import { BreadcrumbComponent } from '../ui/breadcrumb/breadcrumb.component';
import { MenuItem } from 'primeng/api';
import { Store } from '@ngrx/store';
import * as CpuActions from '../store/cpu/cpu.actions';
import * as CpuSelectors from '../store/cpu/cpu.selectors';

@Component({
  selector: 'app-cpu',
  imports: [
    CommonModule,
    DataviewComponent,
    FilterPriceComponent,
    FilterBrandComponent,
    FilterSocketComponent,
    FilterCoresComponent,
    BreadcrumbComponent,
  ],
  templateUrl: './cpu.component.html',
  styleUrl: './cpu.component.css',
})
export class CpuComponent implements OnInit {
  private store = inject(Store);
  filteredProducts = toSignal(this.store.select(CpuSelectors.selectFilteredCpus), { initialValue: [] });
  allProducts = toSignal(this.store.select(CpuSelectors.selectAllCpus), { initialValue: [] });
  loading = toSignal(this.store.select(CpuSelectors.selectCpuLoading), { initialValue: false });
  error = toSignal(this.store.select(CpuSelectors.selectCpuError), { initialValue: null });
  filters = toSignal(this.store.select(CpuSelectors.selectCpuFilters));
  availableBrands = toSignal(this.store.select(CpuSelectors.selectAvailableBrands), { initialValue: ['All'] });
  availableSockets = toSignal(this.store.select(CpuSelectors.selectAvailableSockets), { initialValue: ['All'] });
  availableCores = toSignal(this.store.select(CpuSelectors.selectAvailableCores), { initialValue: ['All'] });
  availablePriceRange = toSignal(this.store.select(CpuSelectors.selectAvailablePriceRange), { initialValue: { min: 0, max: 2000 } });

  breadcrumbs = signal<MenuItem[]>([
    { label: 'Components' },
    { label: 'CPUs' }
  ]);

  ngOnInit() {
    this.store.dispatch(CpuActions.loadCpus());
    effect(() => {
      const currentFilters = this.filters();
      if (currentFilters) {
        this.updateBreadcrumbs(currentFilters);
      }
    });
  }

  onPriceFilterChange(filter: PriceFilter) {
    this.store.dispatch(CpuActions.setPriceFilter({ filter }));
  }

  onBrandFilterChange(filter: BrandFilter) {
    this.store.dispatch(CpuActions.setBrandFilter({ filter }));
  }

  onSocketFilterChange(filter: SocketFilter) {
    this.store.dispatch(CpuActions.setSocketFilter({ filter }));
  }

  onCoresFilterChange(filter: CoreFilter) {
    this.store.dispatch(CpuActions.setCoreFilter({ filter }));
  }

  private updateBreadcrumbs(filters: any) {
    const items: MenuItem[] = [{ label: 'Components' }, { label: 'CPUs' }];

    if (filters.brand !== 'All') {
      items.push({ label: filters.brand });
    }

    if (filters.socket !== 'All') {
      items.push({ label: filters.socket });
    }

    this.breadcrumbs.set(items);
  }

  onResetFilters() {
    this.store.dispatch(CpuActions.resetFilters());
  }

  onClearError() {
    this.store.dispatch(CpuActions.clearError());
  }
}
