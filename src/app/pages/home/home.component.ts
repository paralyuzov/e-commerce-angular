import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../../ui/carousel/carousel.component';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CarouselComponent, AnimateOnScrollModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  heroData = {
    title: 'Build Your Dream PC',
    subtitle: 'Premium components for ultimate performance',
    description: 'Discover the latest in PC technology with our curated selection of high-performance components, pre-built systems, and expert guidance.',
    primaryButton: 'Shop Now',
    secondaryButton: 'Custom Build'
  };

  featuredProducts = [
    {
      id: 1,
      name: 'NVIDIA GeForce RTX 4090',
      category: 'Graphics Cards',
      price: 1599,
      originalPrice: 1699,
      image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop',
      discount: 6,
      inStock: true,
      rating: 4.9,
      reviews: 847
    },
    {
      id: 2,
      name: 'Intel Core i9-13900K',
      category: 'Processors',
      price: 589,
      originalPrice: 629,
      image: 'https://images.unsplash.com/photo-1593642532744-d377ab507dc8?w=400&h=300&fit=crop',
      discount: 7,
      inStock: true,
      rating: 4.8,
      reviews: 1203
    },
    {
      id: 3,
      name: 'Corsair Vengeance DDR5-5600 32GB',
      category: 'Memory',
      price: 179,
      originalPrice: 199,
      image: 'https://images.unsplash.com/photo-1555680202-c86f0e12f09d?w=400&h=300&fit=crop',
      discount: 10,
      inStock: true,
      rating: 4.7,
      reviews: 654
    },
    {
      id: 4,
      name: 'Samsung 980 PRO 2TB NVMe SSD',
      category: 'Storage',
      price: 149,
      originalPrice: 179,
      image: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=300&fit=crop',
      discount: 17,
      inStock: false,
      rating: 4.8,
      reviews: 923
    }
  ];

  preBuiltSystems = [
    {
      id: 1,
      name: 'Gaming Pro Elite',
      category: 'Gaming PC',
      price: 2499,
      originalPrice: 2799,
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=300&fit=crop',
      specs: {
        cpu: 'Intel i7-13700K',
        gpu: 'RTX 4080',
        ram: '32GB DDR5',
        storage: '1TB NVMe SSD'
      },
      performance: 'Ultra 4K Gaming',
      popular: true
    },
    {
      id: 2,
      name: 'Workstation Master',
      category: 'Workstation',
      price: 3299,
      originalPrice: 3599,
      image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400&h=300&fit=crop',
      specs: {
        cpu: 'Intel i9-13900K',
        gpu: 'RTX 4090',
        ram: '64GB DDR5',
        storage: '2TB NVMe SSD'
      },
      performance: 'Professional Rendering',
      popular: false
    },
    {
      id: 3,
      name: 'Budget Gamer',
      category: 'Entry Gaming',
      price: 899,
      originalPrice: 999,
      image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop',
      specs: {
        cpu: 'AMD Ryzen 5 7600X',
        gpu: 'RTX 4060',
        ram: '16GB DDR5',
        storage: '512GB NVMe SSD'
      },
      performance: '1080p High Settings',
      popular: true
    }
  ];

  features = [
    {
      icon: 'pi pi-truck',
      title: 'Free Shipping',
      description: 'On orders over $200',
      highlight: 'Fast & Reliable'
    },
    {
      icon: 'pi pi-clock',
      title: 'Fast Delivery',
      description: '2-3 business days',
      highlight: 'Express Available'
    },
    {
      icon: 'pi pi-wrench',
      title: 'Expert Support',
      description: '24/7 technical help',
      highlight: 'Live Chat'
    },
    {
      icon: 'pi pi-cog',
      title: 'Custom Builds',
      description: 'Tailored for your needs',
      highlight: 'Free Consultation'
    },
    {
      icon: 'pi pi-shield',
      title: 'Quality Assured',
      description: 'Tested & certified',
      highlight: 'Warranty Included'
    },
    {
      icon: 'pi pi-dollar',
      title: 'Best Prices',
      description: 'Price match guarantee',
      highlight: 'No Hidden Fees'
    }
  ];

  newsletter = {
    title: 'Stay Updated',
    description: 'Get the latest deals, product launches, and tech news delivered to your inbox.',
    placeholder: 'Enter your email address',
    buttonText: 'Subscribe Now'
  };

  addToCart(product: any) {
    console.log('Added to cart:', product);
  }

  configureSystem(system: any) {
    console.log('Configure system:', system);
  }

  subscribeNewsletter(email: string) {
    console.log('Newsletter subscription:', email);
  }
}
