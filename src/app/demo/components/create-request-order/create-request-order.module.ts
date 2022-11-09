// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateRequestOrderComponent } from './create-request-order.component';
import { CreateRequestOrderRoutingModule } from './create-request-order-routing.module';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CreateRequestOrderRoutingModule,
    DropdownModule,
    CalendarModule,
    TableModule,
    InputTextModule,
    InputTextareaModule,
    FormsModule,
    // BrowserModule
  ],
  declarations: [CreateRequestOrderComponent],
})
export class CreateRequestOrderModule { }