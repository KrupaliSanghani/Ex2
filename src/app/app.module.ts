import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ItemsService } from 'src/app/items.service';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { EntryComponent } from './restaurant/entry/entry.component';
import { DisplayComponent } from './restaurant/display/display.component';
import { HeaderComponent } from './header/header.component';
import { TodaysMenuComponent } from './todays-menu/todays-menu.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HighlightDirective } from './highlight.directive'


@NgModule({
  declarations: [
    AppComponent,
    RestaurantComponent,
    EntryComponent,
    DisplayComponent,
    HeaderComponent,
    TodaysMenuComponent,
    HighlightDirective

  ],
  imports: [

    BrowserModule, FormsModule,

    AppRoutingModule
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
