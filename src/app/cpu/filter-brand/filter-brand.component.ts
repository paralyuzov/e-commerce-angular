import { Component, input, output, computed } from '@angular/core';
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
  availableBrands = input<string[]>(['All']);
  selectedBrand = input<string>('All');
  brandFilterChange = output<BrandFilter>();

  brandOptions = computed(() => {
    const brands = this.availableBrands();
    return brands.map(brand => ({ label: brand, value: brand }));
  });

  onBrandChange(selectedBrand: string) {
    this.brandFilterChange.emit({ selectedBrand });
  }

}
