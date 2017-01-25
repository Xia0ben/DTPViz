import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FileInputComponent } from './fileInput/fileInput.component';
import { FileInputService } from './fileInput/fileInput.service';
import { TableComponent } from './table/table.component';
import { FiltersComponent } from './filters/filters.component';
import { FiltersService } from './filters/filters.service';

@NgModule({
  declarations: [
    FileInputComponent,
    TableComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [FileInputService, FiltersService],
  bootstrap: [FileInputComponent, TableComponent, FiltersComponent]
})
export class AppModule { }
