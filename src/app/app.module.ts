import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from "@angular/router";
import {NgZorroModule} from "./_modules/ng-zorro.module";
import {StrategyComponent} from './strategy/strategy.component';

@NgModule({
  declarations: [
    AppComponent,
    StrategyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NgZorroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
