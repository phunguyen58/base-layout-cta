import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockDeliveringComponent } from './stock-delivering.component';
import { StockDeliveringRoutingModule } from './stock-delivering-routing.module';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    StockDeliveringComponent
  ],
  imports: [
    CommonModule,
    StockDeliveringRoutingModule,
    CalendarModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    ConfirmDialogModule,
    TableModule
  ]
})
export class StockDeliveringModule { }
