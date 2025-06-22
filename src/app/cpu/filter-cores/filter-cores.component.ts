import { Component, computed, input, output, signal } from '@angular/core';
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
  allCpus = input.required<CPU[]>();
  selectedCores = signal<number | string>('All');
  coreFilterChange = output<CoreFilter>();

  coreOptions = computed(() => {
    const cpus = this.allCpus();
    const uniqueCores = [...new Set(cpus.map(cpu => cpu.cores))].sort((a,b) => a-b);
    return[
      { label: 'All', value: 'All' },
      ...uniqueCores.map(cores => ({ label: `${cores} Cores`, value: cores }))
    ]
  })

  onCoreChange(selectedCores: number | string) {
    this.selectedCores.set(selectedCores);
    this.coreFilterChange.emit({ selectedCores });
  }

}
