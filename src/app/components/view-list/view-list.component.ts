import { Component, OnInit } from '@angular/core';
import { GetItemlistService } from 'src/app/Services/get-itemlist.service';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css']
})
export class ViewListComponent implements OnInit {

  private itemList:Item[];


  constructor(private getItemListService:GetItemlistService,
              
    ) { }

  getItemList() {
    this.getItemListService.getItemList().subscribe(
      res => {
        console.log(res.json());
        this.itemList = res.json();
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.getItemList();
  
  }

}
