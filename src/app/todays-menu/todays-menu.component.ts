import { Component, OnInit } from '@angular/core';

import { ItemsService } from '../items.service';

@Component({
  selector: 'app-todays-menu',
  templateUrl: './todays-menu.component.html',
  styleUrls: ['./todays-menu.component.css']
})
export class TodaysMenuComponent implements OnInit {

  // ----------menulist-array-------
  menuArr = [];

  constructor(private itemservice: ItemsService) { }

  ngOnInit() {

    this.menuArr = this.itemservice.getMenuList();
    console.log(this.menuArr);
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



