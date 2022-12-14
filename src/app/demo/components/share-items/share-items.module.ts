import { importProvidersFrom, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareItemsComponent } from './share-items.component';
import { ShareItemsRoutingModule } from './share-items-routing.module';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
  declarations: [
    ShareItemsComponent
  ],
  bootstrap: [ShareItemsComponent],
  imports: [
    CommonModule,
    ShareItemsRoutingModule,
    DropdownModule,
    InputTextModule,
    InputTextareaModule,
    ConfirmDialogModule,
    ButtonModule,
    TableModule,
    CheckboxModule
  ]
})
export class ShareItemsModule { }
