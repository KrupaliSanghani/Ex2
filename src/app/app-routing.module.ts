import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { RestaurantComponent } from './restaurant/restaurant.component';
import { TodaysMenuComponent } from './todays-menu/todays-menu.component';
import { BrowserModule } from '@angular/platform-browser';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: RestaurantComponent },
    // {path: 'add', component: TodaysMenuComponent},
    { path: 'todays-menu', component: TodaysMenuComponent },
];


@NgModule({

    imports: [
        RouterModule.forRoot(appRoutes),
        BrowserModule,
    ],
    exports: [RouterModule],
})


export class AppRoutingModule {


}