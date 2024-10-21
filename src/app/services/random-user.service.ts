import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {
  private apiUrl: string = 'https://randomuser.me/api/';
  private apiUrl5 = 'https://randomuser.me/api/?results=3';

  constructor(private http: HttpClient) {}

  obtenerUsuarioAleatorio(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  obtenerInstructores(): Observable<any> {
    return this.http.get<any>(this.apiUrl5);
  }
}
