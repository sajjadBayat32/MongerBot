import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StrategyComponent} from "./strategy/strategy.component";

const routes: Routes = [
  {
    path: 'strategies',
    component: StrategyComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
