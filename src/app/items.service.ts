import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})


export class ItemsService {
    public displayItem = new Subject<any>();
    menuArr = [];
    displayMenu = [];

    private messageSource = new BehaviorSubject('default message');
    public currentMessageSubscriber = this.messageSource.asObservable();
    // subject: any;

    constructor() { }

    // ------------from-display-component----------
    // getMenuList(): Observable<any> {
    // return this.subject.asObservable();
    // return this.menuArr;
    // }


    sendData(data: any) {
        this.displayItem.next(data);
    }

    // storeMenuList(passData) {
    //     this.menuArr.push(passData);
    //     this.displayItem.next(passData);
    //     console.log(this.menuArr);
    // }

    notify(message: any) {
        this.messageSource.next(message)
    }

    // ------------from-entry-component----------

    getMenu() {
        console.log(this.displayMenu);
        return this.displayMenu;
    }

    AddToService(addData) {
        this.displayMenu.push(addData);
        console.log(this.displayMenu);
    }
}