import { Component} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Message} from 'primeng/api';

@Component({
  selector: 'app-stock-delivering',
  templateUrl: './stock-delivering.component.html',
  providers: [ConfirmationService,MessageService]
})
export class StockDeliveringComponent {
  selectedState: any = null;
  msgs: Message[] = [];

  constructor(private confirmationService: ConfirmationService) {}

  dropdownRequestStatusItems = [
    {name: "Tất cả", code: '1'},
    {name: "Sample status 1", code: '2'},
    {name: "Sample status 2", code: '3'}
  ];

  deliveringSuggestion = [
    {dateDelivering: "1/11/2022", note: "xuất cho ct MINH BOHO", status: "Đã duyệt", isCheck: "", isView: "Xem", isChange: "Sửa", isDelete: "Xóa"},
    {dateDelivering: "2/11/2022", note: "xuất cho ct NHA TOI", status: "Chờ duyệt", isCheck: "Duyệt", isView: "Xem", isChange: "Sửa", isDelete: "Xóa"},
    {dateDelivering: "2/11/2022", note: "", status: "Chờ duyệt", isCheck: "Duyệt", isView: "Xem", isChange: "Sửa", isDelete: "Xóa"}
  ]

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

}
