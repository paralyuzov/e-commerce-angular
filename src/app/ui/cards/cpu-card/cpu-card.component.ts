import { Component, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CPU } from '../../../interfaces/cpu.interface';

@Component({
  selector: 'app-cpu-card',
  imports: [CommonModule],
  templateUrl: './cpu-card.component.html',
  styleUrl: './cpu-card.component.css'
})
export class CpuCardComponent {
  cpu = input.required<CPU>();

  // Optional: Add computed properties for better functionality
  hasDiscount = computed(() => {
    const discount = this.cpu().discount;
    return discount !== undefined && discount > 0;
  });
  formattedPrice = computed(() => `$${this.cpu().price.toLocaleString()}`);
  isInStock = computed(() => this.cpu().inStock);
}
