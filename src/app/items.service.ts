import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class ItemsService {


    public displayItem = new BehaviorSubject<any>([]);
    public ItemSubject = new Subject<any>();

    displayMenu = [];
    DataArr = [];

    constructor() { }

    // ------------pass data object to today's menu component----------
    // getMenuList(): Observable<[]> {
    //     return this.displayItem.asObservable();
    //     // return this.menuArr;
    // }

    // -------pass data object to today's menu component-----
    sendData(data) {
        // this.DataArr = data;
        // console.log(this.DataArr);
        this.DataArr.push(data);
        // this.ItemSubject.next(this.DataArr);

        this.displayItem.next(this.DataArr);
        // this.displayItem.next(data);
        console.log(this.displayItem);
    }


    // ------------from-entry-component----------
    getMenu() {
        console.log(this.displayMenu);
        return this.displayMenu;
    }

    AddToService(addData) {
        this.displayMenu.push(addData);
        this.ItemSubject.next(this.displayMenu);
        console.log(addData);
    }
}