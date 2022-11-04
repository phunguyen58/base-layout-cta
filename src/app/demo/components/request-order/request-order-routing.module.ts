import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RequestOrderComponent } from './request-order.component';

@NgModule({
    imports: [
        RouterModule.forChild([{ path: '', component: RequestOrderComponent }]),
    ],
    exports: [RouterModule],
})
export class RequestOrderRoutingModule {}
