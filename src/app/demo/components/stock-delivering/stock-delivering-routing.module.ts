import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StockDeliveringComponent } from './stock-delivering.component';



@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: StockDeliveringComponent}
  ])],
  exports: [RouterModule]
})
export class StockDeliveringRoutingModule { }
