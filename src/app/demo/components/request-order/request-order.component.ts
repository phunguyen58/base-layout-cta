import { Component } from '@angular/core';
import {ConfirmationService, MessageService, MenuItem} from 'primeng/api';
import {Message} from 'primeng/api';


@Component({
  templateUrl: './request-order.component.html',
  providers: [ConfirmationService,MessageService],
  styleUrls: ['./request-order.component.scss']
})
export class RequestOrderComponent {
  selectedState: any = null;
  msgs: Message[] = [];
  constructionItems: MenuItem[] = [{
    label: 'Công trình',
    items: [
        {label: 'MINH BOHO'},
        {label: 'ct NHA TOI'}
    ]
  }];

  pycNumberItems: MenuItem[] = [{
    label: 'Số PYC',
    items: [
        {label: '123456-ABC'},
        {label: '123456-ABC'},
        {label: '123456-ABC'}
    ]
  }];

  requestStatusItems: MenuItem[] = [{
    label: 'Số PYC',
    items: [
        {label: 'Tất cả'},
        {label: 'Sample status 1'},
        {label: 'Sample status 2'},

    ]
  }];

  items: MenuItem[] = [ 
    {
        label: 'Update',
        icon: 'pi pi-refresh',
        command: () => {
            // this.update();
        }
    },
    {
        label: 'Delete',
        icon: 'pi pi-times',
        command: () => {
            // this.delete();
        }
    }];

  constructor(private confirmationService: ConfirmationService) {}
  
  dropdownConstructionItems = [
    { name: 'Minh Boho 1', code: 'Minh Boho'},
    { name: 'ct NHA TOI', code: 'ct NHA TOI'}
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
    {code: "MINHBOHO2", name: "MINH BOHO 2", receiver: "Ms Tuyền", place: "1137 Nguyễn Xiển Q9 TPHCM", neededDate: "01/11/2022", pycNum: "Minh-YCVT-02", status: "Đang chờ duyệt", isCheck: "Duyệt", isView: "Xem", isEdit: "Sửa", isDelete: "Xóa"},
    {code: "MINHBOHO3", name: "MINH BOHO 3", receiver: "Ms Tuyền", place: "1137 Nguyễn Xiển Q9 TPHCM", neededDate: "01/11/2022", pycNum: "Minh-YCVT-02", status: "Đang chờ duyệt", isCheck: "Duyệt", isView: "Xem", isEdit: "Sửa", isDelete: "Xóa"},
    {code: "MINHBOHO4", name: "MINH BOHO 4", receiver: "Ms Tuyền", place: "1137 Nguyễn Xiển Q9 TPHCM", neededDate: "01/11/2022", pycNum: "Minh-YCVT-02", status: "Đang chờ duyệt", isCheck: "Duyệt", isView: "Xem", isEdit: "Sửa", isDelete: "Xóa"},
    {code: "MINHBOHO5", name: "MINH BOHO 5", receiver: "Ms Tuyền", place: "1137 Nguyễn Xiển Q9 TPHCM", neededDate: "01/11/2022", pycNum: "Minh-YCVT-02", status: "Đang chờ duyệt", isCheck: "Duyệt", isView: "Xem", isEdit: "Sửa", isDelete: "Xóa"},
    {code: "MINHBOHO6", name: "MINH BOHO 6", receiver: "Ms Tuyền", place: "1137 Nguyễn Xiển Q9 TPHCM", neededDate: "01/11/2022", pycNum: "Minh-YCVT-02", status: "Đang chờ duyệt", isCheck: "Duyệt", isView: "Xem", isEdit: "Sửa", isDelete: "Xóa"},
    {code: "MINHBOHO7", name: "MINH BOHO 7", receiver: "Ms Tuyền", place: "1137 Nguyễn Xiển Q9 TPHCM", neededDate: "01/11/2022", pycNum: "Minh-YCVT-02", status: "Đang chờ duyệt", isCheck: "Duyệt", isView: "Xem", isEdit: "Sửa", isDelete: "Xóa"},
    {code: "MINHBOHO8", name: "MINH BOHO 8", receiver: "Ms Tuyền", place: "1137 Nguyễn Xiển Q9 TPHCM", neededDate: "01/11/2022", pycNum: "Minh-YCVT-02", status: "Đang chờ duyệt", isCheck: "Duyệt", isView: "Xem", isEdit: "Sửa", isDelete: "Xóa"},
    {code: "MINHBOHO9", name: "MINH BOHO 9", receiver: "Ms Tuyền", place: "1137 Nguyễn Xiển Q9 TPHCM", neededDate: "01/11/2022", pycNum: "Minh-YCVT-02", status: "Đang chờ duyệt", isCheck: "Duyệt", isView: "Xem", isEdit: "Sửa", isDelete: "Xóa"},
    {code: "MINHBOHO10", name: "MINH BOHO 10", receiver: "Ms Tuyền", place: "1137 Nguyễn Xiển Q9 TPHCM", neededDate: "01/11/2022", pycNum: "Minh-YCVT-02", status: "Đang chờ duyệt", isCheck: "Duyệt", isView: "Xem", isEdit: "Sửa", isDelete: "Xóa"},
    {code: "MINHBOHO11", name: "MINH BOHO 11", receiver: "Ms Tuyền", place: "1137 Nguyễn Xiển Q9 TPHCM", neededDate: "01/11/2022", pycNum: "Minh-YCVT-02", status: "Đang chờ duyệt", isCheck: "Duyệt", isView: "Xem", isEdit: "Sửa", isDelete: "Xóa"},
    {code: "MINHBOHO12", name: "MINH BOHO 12", receiver: "Ms Tuyền", place: "1137 Nguyễn Xiển Q9 TPHCM", neededDate: "01/11/2022", pycNum: "Minh-YCVT-02", status: "Đang chờ duyệt", isCheck: "Duyệt", isView: "Xem", isEdit: "Sửa", isDelete: "Xóa"},
    {code: "MINHBOHO13", name: "MINH BOHO 13", receiver: "Ms Tuyền", place: "1137 Nguyễn Xiển Q9 TPHCM", neededDate: "01/11/2022", pycNum: "Minh-YCVT-02", status: "Đang chờ duyệt", isCheck: "Duyệt", isView: "Xem", isEdit: "Sửa", isDelete: "Xóa"},
    {code: "MINHBOHO14", name: "MINH BOHO 14", receiver: "Ms Tuyền", place: "1137 Nguyễn Xiển Q9 TPHCM", neededDate: "01/11/2022", pycNum: "Minh-YCVT-02", status: "Đang chờ duyệt", isCheck: "Duyệt", isView: "Xem", isEdit: "Sửa", isDelete: "Xóa"},
    
  ];


  itemsDetailRow = [
    {name: "Chỉ dán cạnh", size: "21mm", description: "Chỉ La/Me PL-04 Rộng 21mm", style: "Đồng màu với mã ván", dvt: "md", num: "50", useFor: "ct NHA TOI", isDelete: "Hủy"},
    {name: "Chỉ dán cạnh", size: "22mm", description: "Chỉ La/Me PL-04 Rộng 22mm", style: "Đồng màu với mã ván", dvt: "md", num: "60", useFor: "ct NHA TOI", isDelete: "Hủy"},
    {name: "Chỉ dán cạnh", size: "22mm", description: "Chỉ La/Me PL-04 Rộng 22mm", style: "Đồng màu với mã ván", dvt: "md", num: "60", useFor: "ct NHA TOI", isDelete: "Hủy"},
    {name: "Chỉ dán cạnh", size: "22mm", description: "Chỉ La/Me PL-04 Rộng 22mm", style: "Đồng màu với mã ván", dvt: "md", num: "60", useFor: "ct NHA TOI", isDelete: "Hủy"},
    {name: "Chỉ dán cạnh", size: "22mm", description: "Chỉ La/Me PL-04 Rộng 22mm", style: "Đồng màu với mã ván", dvt: "md", num: "60", useFor: "ct NHA TOI", isDelete: "Hủy"},
    {name: "Chỉ dán cạnh", size: "22mm", description: "Chỉ La/Me PL-04 Rộng 22mm", style: "Đồng màu với mã ván", dvt: "md", num: "60", useFor: "ct NHA TOI", isDelete: "Hủy"},
    {name: "Chỉ dán cạnh", size: "22mm", description: "Chỉ La/Me PL-04 Rộng 22mm", style: "Đồng màu với mã ván", dvt: "md", num: "60", useFor: "ct NHA TOI", isDelete: "Hủy"},
    {name: "Chỉ dán cạnh", size: "22mm", description: "Chỉ La/Me PL-04 Rộng 22mm", style: "Đồng màu với mã ván", dvt: "md", num: "60", useFor: "ct NHA TOI", isDelete: "Hủy"},
    {name: "Chỉ dán cạnh", size: "22mm", description: "Chỉ La/Me PL-04 Rộng 22mm", style: "Đồng màu với mã ván", dvt: "md", num: "60", useFor: "ct NHA TOI", isDelete: "Hủy"},
    {name: "Chỉ dán cạnh", size: "22mm", description: "Chỉ La/Me PL-04 Rộng 22mm", style: "Đồng màu với mã ván", dvt: "md", num: "60", useFor: "ct NHA TOI", isDelete: "Hủy"},
    {name: "Chỉ dán cạnh", size: "23mm", description: "Chỉ La/Me PL-04 Rộng 23mm", style: "Đồng màu với mã ván", dvt: "md", num: "70", useFor: "ct NHA TOI", isDelete: "Hủy"},
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
