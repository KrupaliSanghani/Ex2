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
  special: boolean = true;

  // --------item-name-------
  name: string = '';
  validname: string = 'please Enter Item Name';
  nameError: boolean = false;

  // --------image--------
  img: string;


  // --------category--------
  category: string = 'gujrati';

  // --------price--------
  price: Number;
  validprice: string = 'Enter valid price';
  priceError: boolean = false;

  // --------category-array-------
  categoryArr = [];

  // --------item-array-------
  dataArr: any[] = [];
  modifedtext: string;

  // --------------add-item-array-----------
  onAdd() {
    this.dataArr.push({ Name: this.name, Img: this.img, Category: this.category, Price: this.price, Special: this.special });
    console.log(this.dataArr);

    // var data = this.dataArr.push({ Name: this.name, Img: this.img, Category: this.category, Price: this.price, Special: this.special });
    this._itemsService.AddToService({ Name: this.name, Img: this.img, Category: this.category, Price: this.price, Special: this.special });

    // -------------check validation----------
    if (this.name == '') {
      this.nameError = true
    }

    if (this.price < 1) {
      this.priceError = true
    }
  }

  constructor(private _itemsService: ItemsService) { }

  ngOnInit() {

    // console.log(this.category);

    // --------category-array-------
    this.categoryArr = [
      { id: 1, name: "south indian" },
      { id: 2, name: "punjabi" },
      { id: 3, name: "maxican" },
      { id: 4, name: "gujrati" }

    ]
  }


}
