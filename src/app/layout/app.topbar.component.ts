import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(public layoutService: LayoutService) { }

  
  ngOnInit() {
    this.items = [
        {
                label: 'Manage',
                icon: 'pi pi-user',
                // url: 'http://angular.io'
            },
            {
                label: 'Sign out',
                icon: 'pi pi-sign-out',
                // routerLink: '/fileupload'
            }
        
    ];
  }
}
