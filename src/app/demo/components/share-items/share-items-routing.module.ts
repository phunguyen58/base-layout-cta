import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShareItemsComponent } from './share-items.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: ShareItemsComponent}
  ])],
  exports: [RouterModule]
})
export class ShareItemsRoutingModule { }
