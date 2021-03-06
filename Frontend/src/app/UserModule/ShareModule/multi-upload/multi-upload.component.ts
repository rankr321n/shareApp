import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from "@angular/forms";
import { DragdropService } from "../dragdrop.service";
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-multi-upload',
  templateUrl: './multi-upload.component.html',
  styleUrls: ['./multi-upload.component.css']
})
export class MultiUploadComponent implements OnInit {

  fileArr = [];
  imgArr = [];
  fileObj = [];
  form: FormGroup;
  msg: string;
  progress: number = 0;

  constructor(
    public fb: FormBuilder,
    private sanitizer: DomSanitizer,
    public dragdropService: DragdropService
  ) {
    this.form = this.fb.group({
      files: [null]
    })
  }

  ngOnInit() { }

  upload(e) {
    const fileListAsArray = Array.from(e);
    fileListAsArray.forEach((item, i) => {
      const file = (e as HTMLInputElement);
      const url = URL.createObjectURL(file[i]);
      this.imgArr.push(url);
      this.fileArr.push({ item, url: url });
    })

    this.fileArr.forEach((item) => {
      this.fileObj.push(item.item)
    })

    // Set files form control
    this.form.patchValue({
      files: this.fileObj
    })

    this.form.get('files').updateValueAndValidity()

    // Upload to server
    this.dragdropService.addFiles(this.form.value.files)
      .subscribe((event: HttpEvent<any>) => {
        switch (event.type) {
          case HttpEventType.Sent:
            console.log('Request has been made!');
            break;
          case HttpEventType.ResponseHeader:
            console.log('Response header has been received!');
            break;
          case HttpEventType.UploadProgress:
            this.progress = Math.round(event.loaded / event.total * 100);
            console.log(`Uploaded! ${this.progress}%`);
            break;
          case HttpEventType.Response:
            console.log('File uploaded successfully!', event.body);
            setTimeout(() => {
              this.progress = 0;
              this.fileArr = [];
              this.fileObj = [];
              this.msg = "File uploaded successfully!"
            }, 3000);
        }
      })
  }

  // Clean Url
  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

}
