import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Item } from '../restaurant.model';


@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

items: Item;
 @Output() itemSelected = new EventEmitter();

name='';
itemName: any[]=[];

img;

id=Number;
category;
selectedItem: string;

priceArr: any[]= [];
price: Number;



userInfo = [];
 categoryArr = [];




onAdd(){
  // console.log(this.itemName);
  // this.itemName.push(this.name);
  // this.itemName.push(this.price);
  // this.selectedItem = this.category;
  // this.itemName.push(this.category);
  // this.itemName.push(this.img);


  //  console.log(this.category);

  this.userInfo.push({ Name :  this.name  , Category :  this.category });

  this.itemSelected.emit();
}


  constructor() { }

  ngOnInit() {

    this.categoryArr = [
      {id:1, name:"south indian" },
      {id:2, name:"punjabi" },
      {id:3, name:"maxican" },
      {id:4, name: "gujrati"}

    ]
  }

  
  // onselected(val:any){
  //   this.customFunction(val);
  // }

  // customFunction(val:any){
  //   this.selectedItem = val;
  // }
}
