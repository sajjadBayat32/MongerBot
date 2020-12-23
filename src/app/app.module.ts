import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {NgZorroModule} from './_modules/ng-zorro.module';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyNgZorroAntdModule} from '@ngx-formly/ng-zorro-antd';
import {StrategyListComponent} from './strategies/strategy-list/strategy-list.component';
import {EditStrategyComponent} from './strategies/edit-strategy/edit-strategy.component';
import {HttpClientModule} from '@angular/common/http';
import {StrategyComponent} from './strategies/strategy/strategy.component';

@NgModule({
  declarations: [
    AppComponent,
    StrategyListComponent,
    EditStrategyComponent,
    StrategyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    NgZorroModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyNgZorroAntdModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
