import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ConstructionItemsComponent } from './construction-items.component';



@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: ConstructionItemsComponent}
  ])],
  exports: [RouterModule]
})
export class ConstructionItemsRoutingModule { }
