import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CreateStockDeliveringComponent } from './create-stock-delivering.component';



@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: CreateStockDeliveringComponent}
  ])],
  exports: [RouterModule]
})
export class CreateStockDeliveringRoutingModule { }
