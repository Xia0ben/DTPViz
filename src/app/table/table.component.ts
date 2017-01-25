import { Component, OnInit, NgZone } from '@angular/core';
import { FileInputService } from '../fileInput/fileInput.service';
import { FiltersService } from '../filters/filters.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  data: any;
  blocks: any;
  transactions: any;
  votes: any;
  dles: any;

  filters : any = {types: {block: true, transaction: true, vote: true, dle:true, nbTrueValues: 4},
                   blockStatus: {decidedValid: true, decidedInvalid: true, undecided: true, nbTrueValues: 3},
                   transactionOperation: {create: true, update: true, transfer: true, delete: true, nbTrueValues: 4}};

  fileInputServiceSub: Subscription;
  filtersServiceSub: Subscription;

  constructor(private zone:NgZone, private _fileInputService:FileInputService, private _filtersService:FiltersService) {}

  ngOnInit() {
    this.fileInputServiceSub = this._fileInputService.data$
       .subscribe(data => {
         this.zone.run(() => {
           this.data = data;

           this.blocks = data.blockchain.concat(data.invalidblockdepot == null ? [] : data.invalidblockdepot );

           this.transactions = [];
           this.votes = [];
           for (let block of this.blocks) {
               this.transactions = this.transactions.concat(block.block.transactions == null ? [] : block.block.transactions);
               this.votes = this.votes.concat(block.votes == null ? [] : block.votes);
           }

           this.dles = data.datalake == null ? [] : data.datalake;
         });
       });
     this.filtersServiceSub = this._filtersService.filters$
        .subscribe(filters => {
          this.zone.run(() => {
            this.filters = filters;
          });
        });
  }

  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.fileInputServiceSub.unsubscribe();
  }
}
