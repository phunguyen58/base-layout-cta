import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConstructionItemsComponent } from './construction-items.component';
import { ConstructionItemsRoutingModule } from './construction-items-routing.module';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';


@NgModule({
  declarations: [
    ConstructionItemsComponent
  ],
  imports: [
    CommonModule,
    ConstructionItemsRoutingModule,
    DropdownModule,
    InputTextModule,
    InputTextareaModule,
    ConfirmDialogModule,
    ButtonModule,
    TableModule,
    CheckboxModule
  ]
})
export class ConstructionItemsModule { }
