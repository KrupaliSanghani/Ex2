import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
// import { Output, EventEmitter } from '@angular/core';
// import { Item } from '../restaurant.model';
import { ItemsService } from 'src/app/items.service';


@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {



  // --------for-special--------
  special = true;

  // --------item-name-------
  name = '';
  validname = 'please Enter Item Name';
  nameError = false;
  // --------image--------
  img;
  // validimg = 'please enter ImageUrl';
  // imgError = false;
  // --------category--------
  category = 'gujarati';

  // --------price--------
  price: Number;
  validprice = 'Enter valid price';
  priceError = false
  // --------category-array-------
  categoryArr = [];

  // --------item-array-------
  dataArr: any[] = [];

  // --------------add-item-array-----------
  onAdd() {
    this.dataArr.push({ Name: this.name, Img: this.img, Category: this.category, Price: this.price, Special: this.special });
    console.log(this.dataArr);

    // var data = this.dataArr.push({ Name: this.name, Img: this.img, Category: this.category, Price: this.price, Special: this.special });
    this._itemsService.AddToService({ Name: this.name, Img: this.img, Category: this.category, Price: this.price, Special: this.special });

    if (this.name == '') {
      this.nameError = true
    }


    if (this.price < 1) {
      this.priceError = true
    }

    else {

    }
    // else if (this.img == '') {
    //   this.imgError = !this.imgError
    // }
    // else if (this.img == '') {
    //   this.categoryError = !this.categoryError
    // }
  }


  constructor(private _itemsService: ItemsService) { }

  // --------for-special--------
  notifyOtherComponent() {
    this._itemsService.notify({ msg: 'special' })
  }



  ngOnInit() {

    // --------category-array-------
    this.categoryArr = [
      { id: 1, name: "south indian" },
      { id: 2, name: "punjabi" },
      { id: 3, name: "maxican" },
      { id: 4, name: "gujrati" }

    ]
  }



}
