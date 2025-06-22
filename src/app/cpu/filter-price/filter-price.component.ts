import { Component, computed, effect, input, output, signal } from '@angular/core';
import {Slider} from 'primeng/slider';
import { FormsModule } from '@angular/forms';
import { CPU } from '../../interfaces/cpu.interface';

export interface PriceFilter {
  min: number;
  max: number;
}


@Component({
  selector: 'app-filter-price',
  imports: [FormsModule, Slider],
  templateUrl: './filter-price.component.html',
  styleUrl: './filter-price.component.css'
})
export class FilterPriceComponent {

  allCpus = input.required<CPU[]>();

  rangeValues = signal<[number, number]>([0, 1000]);
  priceFilterChange = output<PriceFilter>();

  constructor() {
    effect(() => {
      const min = this.minPrice();
      const max = this.maxPrice();
      this.rangeValues.set([min, max]);
    })
  }

  minPrice = computed(() => {
    const cpus = this.allCpus();
    return cpus.length > 0 ? Math.min(...cpus.map(cpu => cpu.price)) : 0;
  })

  maxPrice = computed(() => {
    const cpus = this.allCpus();
    return cpus.length > 0 ? Math.max(...cpus.map(cpu => cpu.price)) : 1000;
  })

  onRangeChange(event: any) {
    const [min, max] = event.values;
    this.rangeValues.set([min, max]);
    this.priceFilterChange.emit({ min, max });
  }

  resetFilter() {
    const min = this.minPrice();
    const max = this.maxPrice();
    this.rangeValues.set([min, max]);

    this.priceFilterChange.emit({
      min: min,
      max: max
    });
  }

}
