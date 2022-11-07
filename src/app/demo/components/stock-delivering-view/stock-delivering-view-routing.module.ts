import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StockDeliveringViewComponent } from './stock-delivering-view.component';



@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: StockDeliveringViewComponent}
  ])],
  exports: [RouterModule]
})
export class StockDeliveringViewRoutingModule { }
