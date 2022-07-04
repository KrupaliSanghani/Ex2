import { Component, OnInit, Input } from '@angular/core';
import { ItemsService } from 'src/app/items.service';



@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  @Input() displayData;
  inputArr = false;
  menuArr = [];

  constructor(private itemsService: ItemsService) {
  }

  ngOnInit() {

    // --------for-special-item-------
    this.itemsService.currentMessageSubscriber.subscribe((data: any) => {
      console.log(data)
    })

    // this.inputArr = true;
    this.menuArr = this.itemsService.getMenu();
    console.log(this.menuArr);
    console.log(this.displayData)
  }

  onAddMenu(data) {
    console.log(this.displayData);
    this.itemsService.storeMenuList(data);
  }

}
