import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {NgZorroModule} from './_modules/ng-zorro.module';
import {StrategyComponent} from './strategy/strategy.component';
import { EditStrategyComponent } from './edit-strategy/edit-strategy.component';

@NgModule({
  declarations: [
    AppComponent,
    StrategyComponent,
    EditStrategyComponent
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
