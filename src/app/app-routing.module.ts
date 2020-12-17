import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes} from '@angular/router';
import {StrategyComponent} from "./strategy/strategy.component";

const routes: Routes = [
  {
    path: 'strategies',
    component: StrategyComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule {
}
