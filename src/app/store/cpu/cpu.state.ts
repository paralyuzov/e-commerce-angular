import { CPU } from '../../interfaces/cpu.interface';

export interface CpuState {
  cpus: CPU[];
  selectedCpu: CPU | null;
  loading: boolean;
  error: string | null;
  filters: {
    priceRange: { min: number; max: number };
    brand: string;
    socket: string;
    cores: string;
  };
}


export const initialCpuState:CpuState = {
  cpus:[],
  selectedCpu: null,
  loading: false,
  error: null,
  filters: {
    priceRange: { min: 0, max: 2000 },
    brand: 'All',
    socket: 'All',
    cores: 'All'
  }
}
