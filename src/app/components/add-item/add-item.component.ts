import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { AddItemService } from 'src/app/services/add-item.service';
import { Router } from '@angular/router';
import { ToastrServiceService } from 'src/app/Services/toastr-service.service';
import { UploadImageService } from 'src/app/services/upload-image.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

 private newItem: Item = new Item();
 private itemAdded: boolean;


  constructor(private addItemService:AddItemService,
              private router:Router,
              private toastrService:ToastrServiceService,
              private uploadImageService:UploadImageService) { }

  onSubmit(){
    this.addItemService.sendItem(this.newItem).subscribe(
          res=>{
            this.uploadImageService.upload(JSON.parse(JSON.parse(JSON.stringify(res))._body).id);
            this.itemAdded=true;
            this.newItem=new Item();
            this.newItem.category="Living";
            this.newItem.made="wood";
            
          },
          err=>{
                console.log(err);
       
              }
      );
         //this.router.navigate(['/home-page']);
         //this.toastrService.Success("Added Successfully");
    }
                
  ngOnInit() {
    this.itemAdded=false;
    this.newItem.active=false;
    this.newItem.category="Living";
    this.newItem.made="wood";

  }

}
