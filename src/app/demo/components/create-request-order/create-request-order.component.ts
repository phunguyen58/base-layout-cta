import { Component} from '@angular/core';

@Component({
  templateUrl: './create-request-order.component.html'
})
export class CreateRequestOrderComponent{
  selectedState: any = null;
  currentDate: Date = new Date;

  dropdownConstructionItems = [
    { name: 'Minh Boho 1', code: 'Minh Boho 1'},
    { name: 'Minh Boho 2', code: 'Minh Boho 2'},
    { name: 'Minh Boho 3', code: 'Minh Boho 3'}
  ];

  dropdownReceiverItems = [
    {name: 'Minh bp thu mua', code: 'Minh bp thu mua'},
    {name: 'Sales', code: 'Sales'},
    {name: 'Engineer', code: 'Engineer'},
    
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

  itemsDetailRow = [
    {name: "Chỉ dán cạnh", size: "21mm", description: "Chỉ La/Me PL-04 Rộng 21mm", style: "Đồng màu với mã ván", dvt: "md", num: "50", useFor: "ct NHA TOI", isDelete: "Hủy"},
    {name: "Chỉ dán cạnh", size: "22mm", description: "Chỉ La/Me PL-04 Rộng 22mm", style: "Đồng màu với mã ván", dvt: "md", num: "60", useFor: "ct NHA TOI", isDelete: "Hủy"},
    {name: "Chỉ dán cạnh", size: "23mm", description: "Chỉ La/Me PL-04 Rộng 23mm", style: "Đồng màu với mã ván", dvt: "md", num: "70", useFor: "ct NHA TOI", isDelete: "Hủy"},
  ];

 
}
