import { Component } from '@angular/core';

@Component({
  selector: 'file-input',
  templateUrl: './fileInput.component.html',
  styleUrls: ['./fileInput.component.css']
})

export class FileInputComponent {
  data: any;

  fileChange(event) {
    let fileList: FileList = event.target.files;

    if(fileList.length > 0) {
        let file: File = fileList[0];

        if (file) {
          let content: any;
          let reader = new FileReader();
          reader.onload = function(e:FileReaderEvent) {
            content = JSON.parse(e.target.result);
            console.log(content);
          };
          reader.readAsText(file);
          this.data = content;
        }
        else {
          console.log("Failed to load file");
        }

        console.log(this.data);
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
