import {
  Component,
  computed,
  effect,
  input,
  output,
  signal,
} from '@angular/core';
import { Slider } from 'primeng/slider';
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
  styleUrl: './filter-price.component.css',
})
export class FilterPriceComponent {
  currentPriceRange = input<{ min: number; max: number }>({ min: 0, max: 2000 });
  availablePriceRange = input<{ min: number; max: number }>({ min: 0, max: 2000 });
  rangeValues = signal<[number, number]>([0, 0]);

  priceFilterChange = output<PriceFilter>();
  minPrice = computed(() => this.availablePriceRange().min);
  maxPrice = computed(() => this.availablePriceRange().max);

  constructor() {
    effect(() => {
      const current = this.currentPriceRange();
      this.rangeValues.set([current.min, current.max]);
    });
  }

  onRangeChange(event: any) {
    const [min, max] = event.values;
    this.rangeValues.set([min, max]);
    this.priceFilterChange.emit({ min, max });
  }

  resetFilter() {
    this.priceFilterChange.emit({
      min: this.minPrice(),
      max: this.maxPrice(),
    });
  }
}
