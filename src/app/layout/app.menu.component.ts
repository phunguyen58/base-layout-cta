import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {
    model: any[] = [];

    constructor(public layoutService: LayoutService) {}

    ngOnInit() {
        this.model = [
            {
                items: [
                    {
                        label: 'Yêu cầu đặt mua vật tư',
                        icon: 'pi pi-shopping-cart',
                        routerLink: ['/request-order'],
                    },
                    {
                        label: 'Kế hoạch mua vật tư',
                        icon: 'pi pi-file-o',
                        routerLink: ['/plan-order'],
                    },
                    {
                        label: 'Nhập kho',
                        icon: 'pi pi-caret-right',
                        routerLink: ['/uikit/floatlabel'],
                    },
                    {
                        label: 'Xuất kho',
                        icon: 'pi pi-caret-left',
                        routerLink: ['/stock-delivering'],
                    },
                    {
                        label: 'Danh sách vật tư dùng chung',
                        icon: 'pi pi-fw pi-box',
                        routerLink: ['/uikit/button'],
                    },
                    {
                        label: 'Danh sách vật tư theo công trình',
                        icon: 'pi pi-fw pi-table',
                        routerLink: ['/uikit/table'],
                    },
                    {
                        label: 'Quản lý',
                        icon: 'pi pi-fw pi-list',
                        routerLink: ['/uikit/list'],
                    },
                ],
            },
        ];
    }
}
