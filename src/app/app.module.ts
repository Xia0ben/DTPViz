import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FileInputComponent } from './fileInput/fileInput.component';
import { FileInputService } from './fileInput/fileInput.service';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    FileInputComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [FileInputService],
  bootstrap: [FileInputComponent, TableComponent]
})
export class AppModule { }
