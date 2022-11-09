import { Component } from '@angular/core';
import {ConfirmationService, ConfirmEventType, MessageService} from 'primeng/api';
import {Message} from 'primeng/api';

@Component({
  selector: 'app-share-items',
  templateUrl: './share-items.component.html',
  providers: [ConfirmationService,MessageService]
})
export class ShareItemsComponent {
  selectedState: any = null;
  msgs: Message[] = [];
  constructor(private confirmationService: ConfirmationService) {}

  dropdownProviderItems = [
    {name: "Tất cả", code: '1'},
    {name: "Sample 1", code: '2'},
    {name: "Sample 2", code: '3'}
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

  shareItemsList = [
    {provider: "An Cường", codeItem: "101T-21mm", nameItem: "Chỉ dán cạnh", size: "21mm", description: "Chỉ La/Me PL-04 Rộng 21mm", style: "Đồng màu với mã ván", dvt: "md", note: "VT dùng chung", minQuantity: "5", maxQuantity: "10", stockQuantity: "0", isShare: "Yes", isEdit: "Sửa", isDelete: "Xóa"},
    {provider: "Ivan", codeItem: "101T-21mm", nameItem: "Chỉ dán cạnh", size: "21mm", description: "Chỉ La/Me PL-04 Rộng 21mm", style: "Đồng màu với mã ván", dvt: "md", note: "VT dùng chung", minQuantity: "5", maxQuantity: "10", stockQuantity: "0", isShare: "Yes", isEdit: "Sửa", isDelete: "Xóa"},
    {provider: "Ivan", codeItem: "101T-21mm", nameItem: "Chỉ dán cạnh", size: "21mm", description: "Chỉ La/Me PL-04 Rộng 21mm", style: "Đồng màu với mã ván", dvt: "md", note: "VT dùng chung", minQuantity: "5", maxQuantity: "10", stockQuantity: "0", isShare: "Yes", isEdit: "Sửa", isDelete: "Xóa"},
    {provider: "An Cường", codeItem: "101T-21mm", nameItem: "Chỉ dán cạnh", size: "21mm", description: "Chỉ La/Me PL-04 Rộng 21mm", style: "Đồng màu với mã ván", dvt: "md", note: "VT dùng chung", minQuantity: "5", maxQuantity: "10", stockQuantity: "0", isShare: "Yes", isEdit: "Sửa", isDelete: "Xóa"},
    {provider: "An Cường", codeItem: "101T-21mm", nameItem: "Chỉ dán cạnh", size: "21mm", description: "Chỉ La/Me PL-04 Rộng 21mm", style: "Đồng màu với mã ván", dvt: "md", note: "VT dùng chung", minQuantity: "5", maxQuantity: "10", stockQuantity: "0", isShare: "Yes", isEdit: "Sửa", isDelete: "Xóa"},
  ]
}
