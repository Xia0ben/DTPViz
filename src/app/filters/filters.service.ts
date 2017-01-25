import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class FiltersService {
  // Observable data source
  private _filtersSource = new ReplaySubject<any>(0);
  // Observable data stream
  filters$ = this._filtersSource.asObservable();
  // service command
  changeFilters(newFilters) {
    this._filtersSource.next(newFilters);
  }
}
