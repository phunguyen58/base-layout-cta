import { Component, OnInit } from '@angular/core';
import {ConfirmationService, ConfirmEventType, MessageService} from 'primeng/api';
import {Message} from 'primeng/api';

@Component({
  selector: 'app-construction-items',
  templateUrl: './construction-items.component.html',
  providers: [ConfirmationService,MessageService]
})
export class ConstructionItemsComponent{
  selectedState: any = null;
  msgs: Message[] = [];
  constructor(private confirmationService: ConfirmationService) {}

  dropdownConstructionItems = [
    { name: 'Minh Boho 1', code: 'Minh Boho 1'},
    { name: 'Minh Boho 2', code: 'Minh Boho 2'},
    { name: 'Minh Boho 3', code: 'Minh Boho 3'}
  ];

  dropdownRequestStatusItems = [
    {name: "Tất cả", code: '1'},
    {name: "Sample status 1", code: '2'},
    {name: "Sample status 2", code: '3'}
  ];

  confirm() {
    this.confirmationService.confirm({
        message: 'Bạn có chắc chắn xóa phiếu yêu cầu đặt mua vật tư này?',
        header: 'Delete Confirmation',
        icon: 'pi pi-info-circle',
        accept: () => {
            this.msgs = [{severity:'info', summary:'Confirmed', detail:'Record deleted'}];
        },
        reject: () => {
            this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
        }
    });
  } 

  constructionItemsList = [
    {provider: "An Cường", codeItem: "101T-21mm", nameItem: "Chỉ dán cạnh", size: "21mm", description: "Chỉ La/Me PL-04 Rộng 21mm", style: "Đồng màu với mã ván", dvt: "md", isShare: "Yes", isEdit: "Sửa", isDelete: "Xóa"},
    {provider: "An Cường", codeItem: "101T-21mm", nameItem: "Chỉ dán cạnh", size: "21mm", description: "Chỉ La/Me PL-04 Rộng 21mm", style: "Đồng màu với mã ván", dvt: "md", isShare: "Yes", isEdit: "Sửa", isDelete: "Xóa"},
    {provider: "An Cường", codeItem: "101T-21mm", nameItem: "Chỉ dán cạnh", size: "21mm", description: "Chỉ La/Me PL-04 Rộng 21mm", style: "Đồng màu với mã ván", dvt: "md", isShare: "Yes", isEdit: "Sửa", isDelete: "Xóa"},
    {provider: "An Cường", codeItem: "101T-21mm", nameItem: "Chỉ dán cạnh", size: "21mm", description: "Chỉ La/Me PL-04 Rộng 21mm", style: "Đồng màu với mã ván", dvt: "md", isShare: "Yes", isEdit: "Sửa", isDelete: "Xóa"},
    {provider: "An Cường", codeItem: "101T-21mm", nameItem: "Chỉ dán cạnh", size: "21mm", description: "Chỉ La/Me PL-04 Rộng 21mm", style: "Đồng màu với mã ván", dvt: "md", isShare: "Yes", isEdit: "Sửa", isDelete: "Xóa"},
    {provider: "An Cường", codeItem: "101T-21mm", nameItem: "Chỉ dán cạnh", size: "21mm", description: "Chỉ La/Me PL-04 Rộng 21mm", style: "Đồng màu với mã ván", dvt: "md", isShare: "Yes", isEdit: "Sửa", isDelete: "Xóa"},
    {provider: "An Cường", codeItem: "101T-21mm", nameItem: "Chỉ dán cạnh", size: "21mm", description: "Chỉ La/Me PL-04 Rộng 21mm", style: "Đồng màu với mã ván", dvt: "md", isShare: "Yes", isEdit: "Sửa", isDelete: "Xóa"},
    {provider: "An Cường", codeItem: "101T-21mm", nameItem: "Chỉ dán cạnh", size: "21mm", description: "Chỉ La/Me PL-04 Rộng 21mm", style: "Đồng màu với mã ván", dvt: "md", isShare: "Yes", isEdit: "Sửa", isDelete: "Xóa"},
    {provider: "An Cường", codeItem: "101T-21mm", nameItem: "Chỉ dán cạnh", size: "21mm", description: "Chỉ La/Me PL-04 Rộng 21mm", style: "Đồng màu với mã ván", dvt: "md", isShare: "Yes", isEdit: "Sửa", isDelete: "Xóa"},
    {provider: "An Cường", codeItem: "101T-21mm", nameItem: "Chỉ dán cạnh", size: "21mm", description: "Chỉ La/Me PL-04 Rộng 21mm", style: "Đồng màu với mã ván", dvt: "md", isShare: "Yes", isEdit: "Sửa", isDelete: "Xóa"},
    {provider: "An Cường", codeItem: "101T-21mm", nameItem: "Chỉ dán cạnh", size: "21mm", description: "Chỉ La/Me PL-04 Rộng 21mm", style: "Đồng màu với mã ván", dvt: "md", isShare: "Yes", isEdit: "Sửa", isDelete: "Xóa"},
    
  ];
}
