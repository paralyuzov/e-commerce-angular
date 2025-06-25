export interface CPU {
  _id: string;
  id?: string; 
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
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

export interface PriceFilter {
  min: number;
  max: number;
}

export interface BrandFilter {
  selectedBrand: string;
}

export interface SocketFilter {
  selectedSocket: string;
}

export interface CoreFilter {
  selectedCores: string | number;
}
