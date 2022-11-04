import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuRoutingModule } from './menu-routing.module';
import { CreateRequestOrderComponent } from './create-request-order/create-request-order.component';

@NgModule({
	imports: [
		CommonModule,
		MenuRoutingModule
	],
	declarations: []
})
export class MenuModule { }
