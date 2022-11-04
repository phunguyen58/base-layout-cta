import { NgModule } from '@angular/core';
import { CreateRequestOrderComponent } from './create-request-order.component';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: CreateRequestOrderComponent}
  ])],
  exports: [RouterModule]
})
export class CreateRequestOrderRoutingModule { }
