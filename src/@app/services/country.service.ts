import { Injectable } from '@angular/core';
import { COUNTRIES } from '@app/mock';
import { Country } from '@app/models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  getAll(): Observable<Array<Country>> {
    return of(COUNTRIES);
  }
}
