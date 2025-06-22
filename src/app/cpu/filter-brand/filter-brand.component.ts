import { Component, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CPU } from '../../interfaces/cpu.interface';

export interface BrandFilter {
  selectedBrand: string;
}

@Component({
  selector: 'app-filter-brand',
  imports: [FormsModule],
  templateUrl: './filter-brand.component.html',
  styleUrl: './filter-brand.component.css'
})
export class FilterBrandComponent {
  allCpus = input.required<CPU[]>();

  selectedBrand = signal<string>('All');
  brandFilterChange = output<BrandFilter>();

  brandOptions = [
    { label: 'All', value: 'All' },
    { label: 'Intel', value: 'Intel' },
    { label: 'AMD', value: 'AMD' }
  ];

  onBrandChange(selectedBrand: string) {
    console.log('Brand changed to:', selectedBrand);
    this.selectedBrand.set(selectedBrand);
    this.brandFilterChange.emit({ selectedBrand });
  }

}
