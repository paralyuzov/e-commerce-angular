import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-carousel',
  imports: [CarouselModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})
export class CarouselComponent {
  images: string[] = [
    'https://www.pcworld.com/wp-content/uploads/2025/04/Intel-Core.png?quality=50&strip=all', // Gaming PC Setup
    'https://cdn.mos.cms.futurecdn.net/QsNmR2uBBRhKcweBbzD4CN-1200-80.jpg.webp', // Computer Components
    'https://nixanbal.com/media/k2/items/cache/f837d78d3c128acbc72d5ab462f3af2d_L.jpg', // CPU/Processor
    'https://cdn.mos.cms.futurecdn.net/EtY9vkeRfYj66HwJjXCaZE-1200-80.jpg', // Gaming Setup
    'https://techguided.com/wp-content/uploads/2022/08/Corsair-Vengeance-vs-Dominator.jpg', // Graphics Card
    'https://cdn.wccftech.com/wp-content/uploads/2022/11/1667344625521.webp', // RAM Memory
    'https://cdn.wccftech.com/wp-content/uploads/2023/02/JIUSHARK-JF13K-Diamond-Top-Down-CPU-Air-Cooler-40-USD-_3.png', // Gaming PC
    'https://www.groovypost.com/wp-content/uploads/2019/09/Logitech-mx-keys-mx-master-3-1000x459.jpg' // Storage/SSD
  ];

  responsiveOptions = [
    {
      breakpoint: '1400px',
      numVisible: 4,
      numScroll: 1
    },
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];
}
