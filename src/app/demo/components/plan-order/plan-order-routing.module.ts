import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PlanOrderComponent } from './plan-order.component';


@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: PlanOrderComponent}
  ])],
  exports: [RouterModule]
})
export class PlanOrderRoutingModule { }
