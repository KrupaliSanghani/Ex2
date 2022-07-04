import { Component, OnInit, Input } from '@angular/core';
import { ItemsService } from 'src/app/items.service';



@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  // @Input() displayData;
  // inputArr = false;
  // inputArr1 = true;
  // menuArr = [];
  displayData = [];

  constructor(private itemsService: ItemsService) {
    console.log(this.displayData);
  }

  ngOnInit() {

    // --------for-special-item-------
    // this.itemsService.currentMessageSubscriber.subscribe((data: any) => {
    // console.log(data)
    // })

    if (this.displayData.length == 0) {
      this.displayData = this.itemsService.getMenu();
    }


    // console.log(this.displayData.length);
    // // this.inputArr = true;
    // this.menuArr = this.itemsService.getMenu();
    // console.log(this.menuArr.length);
    // console.log(this.displayData)



    // if(this.menuArr.length > 0){
    //   this.inputArr=true;
    //    console.log(this.menuArr.length);
    //    this.inputArr1=false;
    // }



  }

  onAddMenu(data) {
    console.log(this.displayData);
    // this.itemsService.storeMenuList(data);
    this.itemsService.sendData(data);
    // console.log(this.displayData.length);
  }

  // onAddMenuList(passData) {
  //   console.log(this.displayData);
  //   this.itemsService.storeMenuList(passData);
  //   console.log(this.displayData.length);
  // }

}
