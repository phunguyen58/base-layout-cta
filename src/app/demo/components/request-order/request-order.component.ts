import { Component } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Message} from 'primeng/api';


@Component({
  templateUrl: './request-order.component.html',
  providers: [ConfirmationService,MessageService]
})
export class RequestOrderComponent {
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

  dropdownPYCNumberItems = [
    {name: "123456-ABC"},
    {name: "123456-ABC"},
    {name: "123456-ABC"},
  ]

  requestOrderRow = [
    {code: "MINHBOHO", name: "MINH BOHO", receiver: "Ms Tuyền", place: "1137 Nguyễn Xiển Q9 TPHCM", neededDate: "01/11/2022", pycNum: "Minh-YCVT-02", status: "Đang chờ duyệt", isCheck: "Duyệt", isView: "Xem", isEdit: "Sửa", isDelete: "Xóa"},
    {code: "MINHBOHO1", name: "MINH BOHO 1", receiver: "Ms Tuyền", place: "1137 Nguyễn Xiển Q9 TPHCM", neededDate: "01/11/2022", pycNum: "Minh-YCVT-02", status: "Đang chờ duyệt", isCheck: "Duyệt", isView: "Xem", isEdit: "Sửa", isDelete: "Xóa"},
    {code: "MINHBOHO2", name: "MINH BOHO 2", receiver: "Ms Tuyền", place: "1137 Nguyễn Xiển Q9 TPHCM", neededDate: "01/11/2022", pycNum: "Minh-YCVT-02", status: "Đang chờ duyệt", isCheck: "Duyệt", isView: "Xem", isEdit: "Sửa", isDelete: "Xóa"}
    
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

}
