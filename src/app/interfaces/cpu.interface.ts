export interface CPU {
  id: string;
  name: string;
  brand: string;
  type: 'cpu';
  description: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  socket: string;
  cores: number;
  threads: number;
  baseClock: number;
  boostClock: number;
  cache: string;
  tdp: number;
  generation: string;
  architecture: string;
  integratedGraphics?: string;
  inStock: boolean;
  features: string[];
}
