import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StrategyListComponent} from './strategies/strategy-list/strategy-list.component';
import {EditStrategyComponent} from './strategies/edit-strategy/edit-strategy.component';

const routes: Routes = [
  {
    path: 'strategies',
    component: StrategyListComponent
  },
  {
    path: 'strategies/:edit_id',
    component: EditStrategyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
