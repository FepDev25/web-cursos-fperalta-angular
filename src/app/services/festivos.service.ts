import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FestivosService {
  private apiUrl = 'https://date.nager.at/api/v3/publicholidays';

  constructor(private http : HttpClient) { }

  obtenerDiasFestivos(year: number, countryCode: string): Observable<any> {
    const url = `${this.apiUrl}/${year}/${countryCode}`;
    return this.http.get(url);
  }

  esDiaFestivo(countryCode: string): Observable<any> {
    const today = new Date().toISOString().split('T')[0];
    return this.http.get(`https://date.nager.at/api/v3/IsTodayPublicHoliday/${countryCode}`);
  }
}
