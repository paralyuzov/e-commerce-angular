import { Component, computed, input, output } from '@angular/core';
import { CPU } from '../../interfaces/cpu.interface';

export interface CoreFilter {
  selectedCores: number | string;
}
@Component({
  selector: 'app-filter-cores',
  imports: [],
  templateUrl: './filter-cores.component.html',
  styleUrl: './filter-cores.component.css'
})
export class FilterCoresComponent {
  availableCores = input<string[]>(['All']); // Get options from store
  selectedCores = input<string>('All'); // Accept selected value from store
  coreFilterChange = output<CoreFilter>();

  coreOptions = computed(() => {
    const cores = this.availableCores();
    return cores.map(core => ({
      label: core === 'All' ? 'All' : `${core} Cores`,
      value: core
    }));
  });

  onCoreChange(selectedCores: number | string) {
    this.coreFilterChange.emit({ selectedCores });
  }

}
