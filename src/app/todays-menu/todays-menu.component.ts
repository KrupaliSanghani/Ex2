import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-todays-menu',
  templateUrl: './todays-menu.component.html',
  styleUrls: ['./todays-menu.component.css']
})
export class TodaysMenuComponent implements OnInit {

  private subscription: Subscription;
  // @Input('appHighlight') options: any;

  // ----------menulist-array-------
  Arr = [];
  menuArr = [];

  constructor(private itemservice: ItemsService) {

    // this.itemservice.displayItem.subscribe(data => {
    //   console.log(data);
    //   // this.menuArr = data;
    //   this.menuArr.push(data);
    //   // this.Arr.push(data);
    //   console.log(this.menuArr);
    // });


    // this.Arr.push(this.menuArr);
    // this.itemservice.getMenuList().subscribe((data) => {
    //   // this.menuArr.push(data);
    //   this.menuArr = data;
    //   console.log(this.menuArr);
    // })


    console.log(this.Arr);
    console.log(this.menuArr);

  }

  ngOnInit() {



    // this.itemservice.getMenuList().subscribe((data) => {
    //   // this.menuArr.push(data);
    //   this.menuArr = data;
    //   console.log(this.menuArr);
    // })



    this.itemservice.getMenuList().subscribe((data) => {
      // this.menuArr.push(data);
      this.menuArr = data;
      console.log(this.menuArr);
    })




    // -----------get data from service---------

    // this.itemservice.displayItem.subscribe(data => {
    //   console.log(data);
    //   this.menuArr = data;
    //   // this.menuArr.push(data);
    //   // this.Arr.push(data);
    //   console.log(this.menuArr);
    // });

    this.Arr = this.menuArr;
    console.log(this.Arr);
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



