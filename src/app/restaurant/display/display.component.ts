import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../restaurant.model';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  // items: Item;
  @Input() displayData: any[] =[];
  

  constructor() {
    // console.log(this.displayData);
   }

  ngOnInit(): void {
    

  }

  onItemAdded(){
    
  }
}
