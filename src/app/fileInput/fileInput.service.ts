import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class FileInputService {
  // Observable data source
  private _dataSource = new ReplaySubject<any>(0);
  // Observable data stream
  data$ = this._dataSource.asObservable();
  // service command
  changeData(newData) {
    this._dataSource.next(newData);
  }
}
