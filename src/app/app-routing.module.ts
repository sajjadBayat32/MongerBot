import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StrategyComponent} from './strategy/strategy.component';
import {EditStrategyComponent} from './edit-strategy/edit-strategy.component';

const routes: Routes = [
  {
    path: 'strategies',
    component: StrategyComponent
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
