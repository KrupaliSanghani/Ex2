import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { EntryComponent } from './restaurant/entry/entry.component';
import { DisplayComponent } from './restaurant/display/display.component';
import { HeaderComponent } from './header/header.component';
import { TodaysMenuComponent } from './todays-menu/todays-menu.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantComponent,
    EntryComponent,
    DisplayComponent,
    HeaderComponent,
    TodaysMenuComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
