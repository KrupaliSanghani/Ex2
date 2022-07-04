import { BehaviorSubject } from 'rxjs';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})


export class ItemsService {
    menuArr = [];
    displayMenu = [];

    private messageSource = new BehaviorSubject('default message');
    public currentMessageSubscriber = this.messageSource.asObservable();

    constructor() { }

    // ------------from-display-component----------
    getMenuList() {
        console.log(this.menuArr);
        return this.menuArr;
    }

    storeMenuList(passData) {
        this.menuArr.push(passData);
        console.log(this.menuArr);
    }

    notify(message: any) {
        this.messageSource.next(message)
    }

    // ------------from-display-component----------

    getMenu() {
        console.log(this.displayMenu);
        return this.displayMenu;
    }

    AddToService(addData) {
        this.displayMenu.push(addData);
        console.log(this.displayMenu);
    }



}