import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getCityByValue(searchValue: string, limit: number): Observable<any> {
    return this.http.get(
      `${environment.API_URL}/GetCities/${searchValue}?limit=${50}`
    );
  }

  getStreetByValue(
    city: string,
    searchValue: string,
    limit: number
  ): Observable<any> {
    if (city.length <= 0) return EMPTY;

    return this.http.get(
      `${
        environment.API_URL
      }/GetStreets/${searchValue}?limit=${50}&city=${city}`
    );
  }
}
