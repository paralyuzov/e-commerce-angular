import { Component, signal, computed } from '@angular/core';
import { DataviewComponent } from '../ui/dataview/dataview.component';
import { CPU } from '../interfaces/cpu.interface';
import {
  FilterPriceComponent,
  PriceFilter,
} from './filter-price/filter-price.component';
import {
  FilterBrandComponent,
  BrandFilter,
} from './filter-brand/filter-brand.component';
import {
  SocketFilter,
  FilterSocketComponent,
} from './filter-socket/filter-socket.component';
import {
  CoreFilter,
  FilterCoresComponent,
} from './filter-cores/filter-cores.component';

@Component({
  selector: 'app-cpu',
  imports: [
    DataviewComponent,
    FilterPriceComponent,
    FilterBrandComponent,
    FilterSocketComponent,
    FilterCoresComponent,
  ],
  templateUrl: './cpu.component.html',
  styleUrl: './cpu.component.css',
})
export class CpuComponent {
  cpuProducts = signal<CPU[]>([]);

  priceFilter = signal<PriceFilter>({ min: 0, max: 1000 });
  brandFilter = signal<BrandFilter>({ selectedBrand: 'All' });
  socketFilter = signal<SocketFilter>({ selectedSocket: 'All' });
  coreFilter = signal<CoreFilter>({ selectedCores: 'All' });

  filteredProducts = computed(() => {
    const products = this.cpuProducts();
    const priceF = this.priceFilter();
    const brandF = this.brandFilter();
    const socketF = this.socketFilter();
    const coreF = this.coreFilter();

    const filtered = products.filter((product) => {
      const priceMatch =
        product.price >= priceF.min && product.price <= priceF.max;

      const brandMatch =
        brandF.selectedBrand === 'All' ||
        product.brand === brandF.selectedBrand;
      const socketMatch =
        socketF.selectedSocket === 'All' ||
        product.socket === socketF.selectedSocket;

      const coreMatch =
        coreF.selectedCores === 'All' || product.cores === coreF.selectedCores;

      const matches = priceMatch && brandMatch && socketMatch && coreMatch;
      if (!matches) {
        console.log(
          `Product ${product.name} filtered out - price: ${priceMatch}, brand: ${brandMatch}, socket: ${socketMatch}, cores: ${coreMatch}`
        );
      }

      return matches;
    });

    console.log('Filtered products count:', filtered.length);
    return filtered;
  });

  constructor() {
    this.cpuProducts.set([
      {
        id: 'cpu-001',
        name: 'Intel Core i9-13900K',
        brand: 'Intel',
        type: 'cpu',
        description:
          'Flagship 13th Gen processor with 24 cores and 32 threads for ultimate gaming and content creation performance.',
        price: 589,
        originalPrice: 699,
        discount: 16,
        image:
          'https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=400&h=300&fit=crop',
        rating: 4.8,
        reviews: 342,
        category: 'High-End Gaming',
        socket: 'LGA 1700',
        cores: 24,
        threads: 32,
        baseClock: 3.0,
        boostClock: 5.8,
        cache: '36MB L3',
        tdp: 125,
        generation: '13th Gen',
        architecture: 'Raptor Lake',
        integratedGraphics: 'Intel UHD Graphics 770',
        inStock: true,
        features: [
          'Overclockable',
          'DDR5 Support',
          'PCIe 5.0',
          'Intel Thread Director',
          'Thermal Velocity Boost',
        ],
      },
      {
        id: 'cpu-002',
        name: 'AMD Ryzen 9 7900X',
        brand: 'AMD',
        type: 'cpu',
        description:
          '12-core, 24-thread Zen 4 processor delivering exceptional performance for gaming and productivity.',
        price: 449,
        originalPrice: 549,
        discount: 18,
        image:
          'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=300&fit=crop',
        rating: 4.7,
        reviews: 278,
        category: 'High-End Gaming',
        socket: 'AM5',
        cores: 12,
        threads: 24,
        baseClock: 4.7,
        boostClock: 5.6,
        cache: '64MB L3',
        tdp: 170,
        generation: '7000 Series',
        architecture: 'Zen 4',
        integratedGraphics: 'AMD Radeon Graphics',
        inStock: true,
        features: [
          'Overclockable',
          'DDR5 Support',
          'PCIe 5.0',
          'AMD Precision Boost 2',
          'Curve Optimizer',
        ],
      },
      {
        id: 'cpu-003',
        name: 'Intel Core i7-13700K',
        brand: 'Intel',
        type: 'cpu',
        description:
          'Powerful 16-core processor perfect for gaming, streaming, and content creation with excellent price-to-performance.',
        price: 409,
        originalPrice: 449,
        discount: 9,
        image:
          'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
        rating: 4.6,
        reviews: 456,
        category: 'Gaming',
        socket: 'LGA 1700',
        cores: 16,
        threads: 24,
        baseClock: 3.4,
        boostClock: 5.4,
        cache: '30MB L3',
        tdp: 125,
        generation: '13th Gen',
        architecture: 'Raptor Lake',
        integratedGraphics: 'Intel UHD Graphics 770',
        inStock: true,
        features: [
          'Overclockable',
          'DDR5 Support',
          'PCIe 5.0',
          'Intel Turbo Boost 3.0',
          'Hyper-Threading',
        ],
      },
      {
        id: 'cpu-004',
        name: 'AMD Ryzen 7 7700X',
        brand: 'AMD',
        type: 'cpu',
        description:
          '8-core gaming powerhouse with exceptional single-thread performance and energy efficiency.',
        price: 349,
        originalPrice: 399,
        discount: 13,
        image:
          'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400&h=300&fit=crop',
        rating: 4.5,
        reviews: 312,
        category: 'Gaming',
        socket: 'AM5',
        cores: 8,
        threads: 16,
        baseClock: 4.5,
        boostClock: 5.4,
        cache: '32MB L3',
        tdp: 105,
        generation: '7000 Series',
        architecture: 'Zen 4',
        integratedGraphics: 'AMD Radeon Graphics',
        inStock: true,
        features: [
          'Overclockable',
          'DDR5 Support',
          'PCIe 5.0',
          'AMD Smart Access Memory',
          'Precision Boost 2',
        ],
      },
      {
        id: 'cpu-005',
        name: 'Intel Core i5-13600K',
        brand: 'Intel',
        type: 'cpu',
        description:
          'Outstanding mid-range processor offering excellent gaming performance and multitasking capabilities.',
        price: 319,
        originalPrice: 329,
        discount: 3,
        image:
          'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop',
        rating: 4.7,
        reviews: 523,
        category: 'Mid-Range Gaming',
        socket: 'LGA 1700',
        cores: 14,
        threads: 20,
        baseClock: 3.5,
        boostClock: 5.1,
        cache: '24MB L3',
        tdp: 125,
        generation: '13th Gen',
        architecture: 'Raptor Lake',
        integratedGraphics: 'Intel UHD Graphics 770',
        inStock: true,
        features: [
          'Overclockable',
          'DDR5 Support',
          'PCIe 5.0',
          'Intel Turbo Boost 2.0',
          'Hyper-Threading',
        ],
      },
      {
        id: 'cpu-006',
        name: 'AMD Ryzen 5 7600X',
        brand: 'AMD',
        type: 'cpu',
        description:
          'Efficient 6-core processor delivering outstanding gaming performance at an attractive price point.',
        price: 249,
        originalPrice: 299,
        discount: 17,
        image:
          'https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=400&h=300&fit=crop',
        rating: 4.4,
        reviews: 287,
        category: 'Mid-Range Gaming',
        socket: 'AM5',
        cores: 6,
        threads: 12,
        baseClock: 4.7,
        boostClock: 5.3,
        cache: '32MB L3',
        tdp: 105,
        generation: '7000 Series',
        architecture: 'Zen 4',
        integratedGraphics: 'AMD Radeon Graphics',
        inStock: true,
        features: [
          'Overclockable',
          'DDR5 Support',
          'PCIe 5.0',
          'AMD Curve Optimizer',
          'Precision Boost 2',
        ],
      },
      {
        id: 'cpu-007',
        name: 'Intel Core i3-13100F',
        brand: 'Intel',
        type: 'cpu',
        description:
          'Budget-friendly quad-core processor perfect for entry-level gaming and everyday computing tasks.',
        price: 109,
        originalPrice: 129,
        discount: 16,
        image:
          'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=300&fit=crop',
        rating: 4.2,
        reviews: 145,
        category: 'Budget Gaming',
        socket: 'LGA 1700',
        cores: 4,
        threads: 8,
        baseClock: 3.4,
        boostClock: 4.5,
        cache: '12MB L3',
        tdp: 58,
        generation: '13th Gen',
        architecture: 'Raptor Lake',
        inStock: true,
        features: [
          'DDR5 Support',
          'PCIe 4.0',
          'Intel Turbo Boost 2.0',
          'Hyper-Threading',
        ],
      },
      {
        id: 'cpu-008',
        name: 'AMD Ryzen 9 5900X',
        brand: 'AMD',
        type: 'cpu',
        description:
          'Previous-gen flagship with 12 cores and 24 threads, still excellent for high-end workloads and content creation.',
        price: 329,
        originalPrice: 549,
        discount: 40,
        image:
          'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
        rating: 4.6,
        reviews: 789,
        category: 'Workstation',
        socket: 'AM4',
        cores: 12,
        threads: 24,
        baseClock: 3.7,
        boostClock: 4.8,
        cache: '64MB L3',
        tdp: 105,
        generation: '5000 Series',
        architecture: 'Zen 3',
        inStock: false,
        features: [
          'Overclockable',
          'DDR4 Support',
          'PCIe 4.0',
          'AMD Precision Boost 2',
          'Smart Access Memory',
        ],
      },
    ]);
  }

  onPriceFilterChange(filter: PriceFilter) {
    this.priceFilter.set(filter);
  }

  onBrandFilterChange(filter: BrandFilter) {
    this.brandFilter.set(filter);
  }

  onSocketFilterChange(filter: SocketFilter) {
    this.socketFilter.set(filter);
  }

  onCoresFilterChange(filter: CoreFilter) {
    this.coreFilter.set(filter);
  }
}
