import { Component, OnInit, Input } from '@angular/core';
import { ItemsService } from 'src/app/items.service';



@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  displayData = [];
  Arr = [];


  constructor(private itemsService: ItemsService) {
    // console.log(this.displayData);
  }

  ngOnInit() {

    // ---------get data from service----
    if (this.displayData.length == 0) {
      this.displayData = this.itemsService.getMenu();
    }

  }

  // ------pass data object to service---------

  onAddMenu(data) {
    console.log(this.displayData);
    // this.itemsService.storeMenuList(data);
    // this.Arr.push(data);
    // this.itemsService.displayItem.next(this.Arr);
    this.itemsService.sendData(data);
    // console.log(this.displayData.length);
  }

}
