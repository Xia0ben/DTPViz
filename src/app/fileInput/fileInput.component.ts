import { Component } from '@angular/core';
import { FileInputService } from './fileInput.service';

@Component({
  selector: 'file-input',
  templateUrl: './fileInput.component.html',
  styleUrls: ['./fileInput.component.css']
})

export class FileInputComponent {
  constructor(private _fileInputService: FileInputService) { }

  fileChange(event) {
    let fileList: FileList = event.target.files;

    if(fileList.length > 0) {
        let file: File = fileList[0];

        if (file) {
          let fileInputService = this._fileInputService;
          let reader = new FileReader();
          reader.onload = function(e:FileReaderEvent) {
            fileInputService.changeData(JSON.parse(e.target.result));
          };
          reader.readAsText(file);
        }
        else {
          console.log("Failed to load file");
        }
    }
  }
}

interface FileReaderEventTarget extends EventTarget {
    result:string
}

interface FileReaderEvent extends Event {
    target: FileReaderEventTarget;
    getMessage():string;
}
