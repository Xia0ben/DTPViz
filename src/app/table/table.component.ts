import { Component, OnInit, NgZone } from '@angular/core';
import { FileInputService } from '../fileInput/fileInput.service';
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
  types: Array<string> = ["block", "dle"];
  subscription: Subscription;

  constructor(private zone:NgZone, private _fileInputService:FileInputService) {}

  ngOnInit() {
    this.subscription = this._fileInputService.data$
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

           console.log(this.transactions);

           this.dles = data.datalake == null ? [] : data.datalake;
         });
       });
  }

  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.subscription.unsubscribe();
  }
}
