import { Component} from '@angular/core';
import {ConfirmationService, ConfirmEventType, MessageService} from 'primeng/api';
import {Message} from 'primeng/api';


@Component({
  templateUrl: './plan-order.component.html',
  providers: [ConfirmationService,MessageService]
})
export class PlanOrderComponent {
  selectedState: any = null;
  checked: boolean = false;
  displayModal: boolean;
  displayBasic: boolean;

  msgs: Message[] = [];
  constructor(private confirmationService: ConfirmationService) {}

  dropdownConstructionItems = [
    { name: 'Minh Boho 1', code: 'Minh Boho 1'},
    { name: 'Minh Boho 2', code: 'Minh Boho 2'},
    { name: 'Minh Boho 3', code: 'Minh Boho 3'}
  ];

  dropdownProviderItems = [
    {name: "Tất cả", code: '1'},
    {name: "Sample 1", code: '2'},
    {name: "Sample 2", code: '3'}
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

  suggestPlanOrdersList = [
    {provider: "Ivan", itemCode: "MSBL01", itemName: "Phụ kiện", size: "21mm", description: "Bản lề", style: "Đồng màu với mã ván", num: "50", note: " ", construction: "VT dùng chung", pycNumber: "MINH-YCVT-02", neededDate: "1/11/2022", isCheck: "Yes/No"},
    {provider: "Ivan", itemCode: "MSBL01", itemName: "Phụ kiện", size: "21mm", description: "Bản lề", style: "Đồng màu với mã ván", num: "50", note: " ", construction: "VT dùng chung", pycNumber: "MINH-YCVT-02", neededDate: "1/11/2022", isCheck: "Yes/No"},
    {provider: "Ivan", itemCode: "MSBL01", itemName: "Phụ kiện", size: "21mm", description: "Bản lề", style: "Đồng màu với mã ván", num: "50", note: " ", construction: "VT dùng chung", pycNumber: "MINH-YCVT-02", neededDate: "1/11/2022", isCheck: "Yes/No"}
  ];

  createPlanOrdersList = [
    {itemName: "Chỉ dán cạnh", size: "21mm", description: "Chỉ la/Me PL-06 Rộng 21mm", style: "Đồng màu với mã ván", dvt: "md", neededDate: "1/11/2022", num: "40", numStorage: "30", numRealBuy: "10", provider: "An Cường", codeItem: "101T_21mm"},
    {itemName: "Chỉ dán cạnh", size: "21mm", description: "Chỉ la/Me PL-06 Rộng 21mm", style: "Đồng màu với mã ván", dvt: "md", neededDate: "1/11/2022", num: "40", numStorage: "30", numRealBuy: "10", provider: "An Cường", codeItem: "101T_21mm"},
    {itemName: "Chỉ dán cạnh", size: "21mm", description: "Chỉ la/Me PL-06 Rộng 21mm", style: "Đồng màu với mã ván", dvt: "md", neededDate: "1/11/2022", num: "40", numStorage: "30", numRealBuy: "10", provider: "An Cường", codeItem: "101T_21mm"},

  ]

  showModalDialog() {
    this.displayModal = true; 
  } 

  showDialog() {
    this.displayBasic = true;
  }

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
