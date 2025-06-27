import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AuthResponse,
  LoginCredentials,
  RegisterCredentials,
  User,
} from '../interfaces/user.interface';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:3000/auth';

  constructor(private http: HttpClient) {}

  login(credentials: LoginCredentials): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, credentials);
  }

  register(credentials: RegisterCredentials): Observable<string> {
    return this.http
      .post<{ message: string }>(`${this.apiUrl}/register`, credentials)
      .pipe(map((response) => response.message));
  }

  storeToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getStoredToken(): string | null {
    return localStorage.getItem('token');
  }
}
