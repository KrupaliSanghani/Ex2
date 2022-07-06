import { Component, OnInit, Input } from '@angular/core';
import { ItemsService } from 'src/app/items.service';



@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  displayData = [];


  constructor(private itemsService: ItemsService) {

  }

  ngOnInit() {

    // ---------get data from service----

    this.itemsService.ItemSubject.subscribe(data => {
      // console.log(data);
      this.displayData = data;
      console.log(this.displayData);
    });
    // console.log(this.displayData);

    this.displayData = this.itemsService.getMenu();
    console.log(this.displayData.length);
    //   console.log(this.displayData);

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
