import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockDeliveringViewRoutingModule } from './stock-delivering-view-routing.module';
import { StockDeliveringViewComponent } from './stock-delivering-view.component';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    StockDeliveringViewComponent
  ],
  bootstrap: [StockDeliveringViewComponent],
  imports: [
    CommonModule,
    StockDeliveringViewRoutingModule,
    CalendarModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    ConfirmDialogModule,
    TableModule,
    ButtonModule
  ]
})
export class StockDeliveringViewModule { }
