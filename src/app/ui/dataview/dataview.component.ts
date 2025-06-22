import { Component, input, computed } from '@angular/core';
import { DataView } from 'primeng/dataview';
import { CpuCardComponent } from '../cards/cpu-card/cpu-card.component';
import { Product } from '../../interfaces/products.interface';

@Component({
  selector: 'app-dataview',
  imports: [DataView,CpuCardComponent],
  templateUrl: './dataview.component.html',
  styleUrl: './dataview.component.css',
})
export class DataviewComponent {
  products = input.required<Product[]>();

}
