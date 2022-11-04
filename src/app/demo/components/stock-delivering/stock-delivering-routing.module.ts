import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StockDeliveringComponent } from './stock-delivering.component';

@NgModule({
    declarations: [],

    imports: [
        RouterModule.forChild([
            { path: '', component: StockDeliveringComponent },
        ]),
    ],
})
export class StockDeliveringRoutingModule {}
