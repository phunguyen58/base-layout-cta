import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanOrderComponent } from './plan-order.component';
import { PlanOrderRoutingModule } from './plan-order-routing.module';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import {CheckboxModule} from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ButtonModule } from 'primeng/button';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    PlanOrderRoutingModule,
    DropdownModule,
    CalendarModule,
    TableModule,
    InputTextModule,
    InputTextareaModule,
    CheckboxModule,
    ConfirmDialogModule,
    ButtonModule
  ],
  declarations: [PlanOrderComponent],
  bootstrap: [PlanOrderComponent]
})
export class PlanOrderModule { }
