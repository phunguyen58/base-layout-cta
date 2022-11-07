import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestOrderComponent } from './request-order.component';
import { RequestOrderRoutingModule } from './request-order-routing.module';
import { ToolbarModule } from 'primeng/toolbar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import {CalendarModule} from 'primeng/calendar';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    ToolbarModule,
    RequestOrderRoutingModule,
    DropdownModule,
    InputTextModule,
    InputTextareaModule,
    CalendarModule,
    ButtonModule,
    TableModule,
    ToastModule,
    ConfirmPopupModule,
    ConfirmDialogModule
  ],
  declarations: [RequestOrderComponent],
  bootstrap: [RequestOrderComponent]
})
export class RequestOrderModule { }
