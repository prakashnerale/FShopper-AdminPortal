import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { AddItemService } from 'src/app/services/add-item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

 private newItem: Item = new Item();
 private itemAdded: boolean;


  constructor(private addItemService:AddItemService,private router:Router) { }

  onSubmit(){
    this.addItemService.sendItem(this.newItem).subscribe(
          res=>{
            this.itemAdded=true;
            this.newItem=new Item();
            this.newItem.category="Living";
            this.newItem.made="wood";
          } ,
          err=>{
                console.log(err);
       
              }
       );
       this.router.navigate(['/home-page']); 
  }
                
  ngOnInit() {
    this.itemAdded=false;
    this.newItem.active=false;
    this.newItem.category="Living";
    this.newItem.made="wood";

  }

}
