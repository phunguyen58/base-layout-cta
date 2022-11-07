import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateStockDeliveringRoutingModule } from './create-stock-delivering-routing.module';
import { CreateStockDeliveringComponent } from './create-stock-delivering.component';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    CreateStockDeliveringComponent
  ],
  bootstrap: [CreateStockDeliveringComponent],
  imports: [
    CommonModule,
    CreateStockDeliveringRoutingModule,
    CalendarModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    ConfirmDialogModule,
    TableModule
  ]
})
export class CreateStockDeliveringModule { }
