import { Component, input, output, computed } from '@angular/core';
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
  availableSockets = input<string[]>(['All']);
  selectedSocket = input<string>('All');
  socketFilterChange = output<SocketFilter>();

  socketOptions = computed(() => {
    const sockets = this.availableSockets();
    return sockets.map(socket => ({ label: socket, value: socket }));
  });

  onSocketChange(selectedSocket: string) {
    this.socketFilterChange.emit({ selectedSocket });
  }
}
