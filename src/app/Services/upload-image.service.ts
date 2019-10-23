import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {
  
  fileUpload:Array<File>;


  constructor() {
    this.fileUpload = [];
  }

  upload(itemId: number) {
  	this.makeFileRequest("http://localhost:8080/item/add/image?id="+itemId, [], this.fileUpload).then((result) => {
  		console.log(result);
    }, 
        (error) => {
    		console.log(error);
  	});
  }

  modify(itemId: number) {
    console.log(this.fileUpload);
    if (this.fileUpload.length>0) {
      this.makeFileRequest("http://localhost:8080/item/update/image?id="+itemId, [], this.fileUpload).then((result) => {
      console.log(result);
    },
        (error) => {
         console.log(error);
    });
    }
  }

  fileChangeEvent(fileInput: any) {
  	this.fileUpload = <Array<File>> fileInput.target.files;
  }

  
  makeFileRequest(url:string, params:Array<string>, files:Array<File>) {
  	return new Promise((resolve, reject) => {
  		var formData:any = new FormData();
  		var xhr = new XMLHttpRequest();
  		for(var i=0; i<files.length;i++) {
  			formData.append("uploads[]", files[i], files[i].name);
  		}
  		xhr.onreadystatechange = function() {
  			if(xhr.readyState == 4) {
  				if(xhr.status==200) {
  					console.log("image uploaded successfully!");
  				} else {
  					reject(xhr.response);
  				}
  			}
  		}

  		xhr.open("POST", url, true);
  		xhr.setRequestHeader("x-auth-token", localStorage.getItem("xAuthToken"));
  		xhr.send(formData);
  	});
  }
}
