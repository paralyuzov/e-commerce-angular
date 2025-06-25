import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CPU } from '../interfaces/cpu.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface ApiResponse {
  message: string;
  data: CPU[];
}

@Injectable({
  providedIn: 'root',
})
export class CpuService {
  private apiUrl = 'http://localhost:3000/cpu';

  constructor(private http: HttpClient) {}

  getAllCPUs(): Observable<CPU[]> {
    return this.http.get<ApiResponse>(this.apiUrl).pipe(
      map(response => response.data)
    );
  }
}
