import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Injectable } from "@angular/core";

// interface Data {
//     Name: string;
//     Img: string;
//     Category: string;
//     Price: number;
//     Special: boolean;

// }




@Injectable({
    providedIn: 'root'
})

export class ItemsService {

    getData = new Subject();
    DataArr = [];
    public displayItem = new BehaviorSubject<any>([]);
    public ItemSubject = new Subject<any>();
    // menuArr = [];
    displayMenu = [];

    constructor() { }

    // ------------from-display-component----------
    getMenuList(): Observable<[]> {
        return this.displayItem.asObservable();
        // return this.menuArr;
    }

    // -------pass data object to today's menu component-----
    sendData(data) {
        // this.DataArr = data;
        console.log(data);
        // console.log(this.DataArr);
        this.DataArr.push(data);
        // this.ItemSubject.next(this.DataArr);

        this.displayItem.next(this.DataArr);
        // this.displayItem.next(data);
        console.log(this.displayItem);
    }

    // storeMenuList(passData) {
    //     this.menuArr.push(passData);
    //     this.displayItem.next(passData);
    //     console.log(this.menuArr);
    // }


    // ------------from-entry-component----------
    getMenu() {
        console.log(this.displayMenu);
        return this.displayMenu;
    }

    AddToService(addData) {
        this.displayMenu.push(addData);
        this.getData.next(addData);
        console.log(this.displayMenu);
    }
}