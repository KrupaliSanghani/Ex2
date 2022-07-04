import { Component, OnInit } from '@angular/core';

import { ItemsService } from '../items.service';

@Component({
  selector: 'app-todays-menu',
  templateUrl: './todays-menu.component.html',
  styleUrls: ['./todays-menu.component.css']
})
export class TodaysMenuComponent implements OnInit {

  // ----------menulist-array-------
  name;
  menuArr: any = [];

  constructor(private itemservice: ItemsService) {
    this.itemservice.displayItem.subscribe((data) => {
      console.log(data);
      // this.menuArr.slice();
      this.menuArr.push(data);
      console.log(this.menuArr);
      // this.menuArr.push(data);
    })
  }

  ngOnInit() {

    // this.menuArr = this.itemservice.getMenuList();
    // console.log(this.itemservice.displayItem);

    // this.itemservice.getMenuList().subscribe(data => {
    //   console.log(data);
    //   this.menuArr.push(data);
    //   // this.menuArr = data;
    //   console.log(this.menuArr);
    // })



    // this.itemservice.displayItem.subscribe((data) => {
    //   console.log(data);
    //   // this.menuArr.slice();
    //   this.menuArr.push(data);
    //   console.log(this.menuArr);
    //   // this.menuArr.push(data);
    // })

    // this.name = this.menuArr;

  }


  // --------remove-item-------
  onRemove(passData) {
    console.log(passData);

    for (var i = 0; i < this.menuArr.length; i++) {
      if (this.menuArr[i] == passData) {
        this.menuArr.splice(i, 1);
      }
    }
  }

}



