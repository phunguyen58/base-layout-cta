import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { StockDeliveringRoutingModule } from './stock-delivering-routing.module';
import { StockDeliveringComponent } from './stock-delivering.component';

@NgModule({
    imports: [
        CommonModule,
        StockDeliveringRoutingModule,
        DropdownModule,
        CalendarModule,
        InputTextModule,
    ],
    declarations: [StockDeliveringComponent],
})
export class StockDeliveringModule {}
