import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'button', data: { breadcrumb: 'Button' }, loadChildren: () => import('./button/buttondemo.module').then(m => m.ButtonDemoModule) },
        { path: 'charts', data: { breadcrumb: 'Charts' }, loadChildren: () => import('./charts/chartsdemo.module').then(m => m.ChartsDemoModule) },
        { path: 'file', data: { breadcrumb: 'File' }, loadChildren: () => import('./file/filedemo.module').then(m => m.FileDemoModule) },
        { path: 'floatlabel', data: { breadcrumb: 'Float Label' }, loadChildren: () => import('./floatlabel/floatlabeldemo.module').then(m => m.FloatlabelDemoModule) },
        { path: 'formlayout', data: { breadcrumb: 'Form Layout' }, loadChildren: () => import('./formlayout/formlayoutdemo.module').then(m => m.FormLayoutDemoModule) },
        { path: 'input', data: { breadcrumb: 'Input' }, loadChildren: () => import('./input/inputdemo.module').then(m => m.InputDemoModule) },
        { path: 'invalidstate', data: { breadcrumb: 'Invalid State' }, loadChildren: () => import('./invalid/invalidstatedemo.module').then(m => m.InvalidStateDemoModule) },
        { path: 'list', data: { breadcrumb: 'List' }, loadChildren: () => import('./list/listdemo.module').then(m => m.ListDemoModule) },
        { path: 'media', data: { breadcrumb: 'Media' }, loadChildren: () => import('./media/mediademo.module').then(m => m.MediaDemoModule) },
        { path: 'message', data: { breadcrumb: 'Message' }, loadChildren: () => import('./messages/messagesdemo.module').then(m => m.MessagesDemoModule) },
        { path: 'misc', data: { breadcrumb: 'Misc' }, loadChildren: () => import('./misc/miscdemo.module').then(m => m.MiscDemoModule) },
        { path: 'overlay', data: { breadcrumb: 'Overlay' }, loadChildren: () => import('./overlays/overlaysdemo.module').then(m => m.OverlaysDemoModule) },
        { path: 'panel', data: { breadcrumb: 'Panel' }, loadChildren: () => import('./panels/panelsdemo.module').then(m => m.PanelsDemoModule) },
        { path: 'table', data: { breadcrumb: 'Table' }, loadChildren: () => import('./table/tabledemo.module').then(m => m.TableDemoModule) },
        { path: 'tree', data: { breadcrumb: 'Tree' }, loadChildren: () => import('./tree/treedemo.module').then(m => m.TreeDemoModule) },
        { path: 'menu', data: { breadcrumb: 'Menu' }, loadChildren: () => import('./menus/menus.module').then(m => m.MenusModule) },
        
        { path: 'request-order', data: { breadcrumb: 'Request Order' }, loadChildren: () => import('./request-order/request-order.module').then(m => m.RequestOrderModule) },
        { path: 'create-request-order', data: { breadcrumb: 'Create Request Order' }, loadChildren: () => import('./create-request-order/create-request-order.module').then(m => m.CreateRequestOrderModule) },
        { path: 'plan-order', data: { breadcrumb: 'Plan Order' }, loadChildren: () => import('./plan-order/plan-order.module').then(m => m.PlanOrderModule) },
        { path: 'stock-delivering', data: { breadcrumb: 'Stock Delivering' }, loadChildren: () => import('./stock-delivering/stock-delivering.module').then(m => m.StockDeliveringModule) },
        { path: 'create-stock-delivering', data: { breadcrumb: 'Create Stock Delivering' }, loadChildren: () => import('./create-stock-delivering/create-stock-delivering.module').then(m => m.CreateStockDeliveringModule) },
        { path: 'stock-delivering-view', data: { breadcrumb: 'Stock Delivering View' }, loadChildren: () => import('./stock-delivering-view/stock-delivering-view.module').then(m => m.StockDeliveringViewModule) },
        { path: 'share-items', data: { breadcrumb: 'Share Items' }, loadChildren: () => import('./share-items/share-items.module').then(m => m.ShareItemsModule) },
        { path: 'construction-items', data: { breadcrumb: 'Share Items' }, loadChildren: () => import('./construction-items/construction-items.module').then(m => m.ConstructionItemsModule) },

        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class MenuRoutingModule { }
