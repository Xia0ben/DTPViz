import { Component, Input, DoCheck, KeyValueDiffers } from '@angular/core';
import { FiltersService } from './filters.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements DoCheck {
  @Input() types: any = {block: true, transaction: true, vote: true, dle:true, nbTrueValues: 4}
  differTypes: any;
  @Input() blockStatus: any = {decidedValid: true, decidedInvalid: true, undecided: true, nbTrueValues: 3};
  differBlockStatus: any;
  @Input() transactionOperation: any = {create: true, update: true, transfer: true, delete: true, nbTrueValues: 4};
  differTransactionOperation: any;

  constructor(private differs: KeyValueDiffers, private _filtersService: FiltersService) {
		this.differTypes = differs.find({}).create(null);
    this.differBlockStatus = differs.find({}).create(null);
    this.differTransactionOperation = differs.find({}).create(null);
	}

  ngDoCheck() {
    let changesTypes = this.differTypes.diff(this.types);
    let changesBlockStatus = this.differBlockStatus.diff(this.blockStatus);
    let changesTransactionOperation = this.differTransactionOperation.diff(this.transactionOperation);

    if(changesTypes || changesBlockStatus || changesTransactionOperation) {
      let typesCount = 0;
      for (var key in this.types) {
        if (this.types.hasOwnProperty(key) && this.types[key] === true) {
          ++typesCount;
        }
      }
      this.types.nbTrueValues = typesCount;

      let blockStatusCount = 0;
      for (var key in this.blockStatus) {
        if (this.blockStatus.hasOwnProperty(key) && this.blockStatus[key] === true) {
          ++blockStatusCount;
        }
      }
      this.blockStatus.nbTrueValues = blockStatusCount;

      let transactionOperationCount = 0;
      for (var key in this.transactionOperation) {
        if (this.transactionOperation.hasOwnProperty(key) && this.transactionOperation[key] === true) {
          ++transactionOperationCount;
        }
      }
      this.transactionOperation.nbTrueValues = transactionOperationCount;

      let filters = {types: this.types, blockStatus: this.blockStatus, transactionOperation: this.transactionOperation};
      this._filtersService.changeFilters(filters);
    }
  }

}
