import { Component, input, signal, output, computed } from '@angular/core';
import { CPU } from '../../interfaces/cpu.interface';

export interface SocketFilter {
  selectedSocket: string;
}

@Component({
  selector: 'app-filter-socket',
  imports: [],
  templateUrl: './filter-socket.component.html',
  styleUrl: './filter-socket.component.css',
})
export class FilterSocketComponent {
  allCpus = input.required<CPU[]>();
  selectedSocket = signal<string>('All');
  socketFilterChange = output<SocketFilter>();

  socketOptions = computed(() => {
    const cpus = this.allCpus();
    const uniqueSockets = [...new Set(cpus.map(cpu => cpu.socket))];
    return [
      { label: 'All', value: 'All' },
      ...uniqueSockets.map(socket => ({ label: socket, value: socket }))
    ];
  });

  onSocketChange(selectedSocket: string) {
    this.selectedSocket.set(selectedSocket);
    this.socketFilterChange.emit({ selectedSocket });
  }
}
