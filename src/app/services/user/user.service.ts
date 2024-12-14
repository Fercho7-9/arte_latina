import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:5000/api/auth'; // Base URL de tu backend

  constructor(private http: HttpClient) {}

  register(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  updateRole(userId: string, role: string): Observable<any> {
    return this.http.patch(`${this.apiUrl}/update-role`, { userId, role });
  }
}
