import { Injectable } from '@angular/core';
declare var toastr:any;
@Injectable({
  providedIn: 'root'
})
export class ToastrServiceService {

  constructor() { }

  Success(title:string,message?:string){
   
    toastr.Success(title,message);
  }
}
