import { Component} from '@angular/core';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html'
})
export class ManagementComponent {
  userManagement = [
    {username: "nvd", password: "***", fullName: "Nguyễn Văn Duy", nickName: "Mr Duy bp thu mua", email: "duy@gmail.com", phoneNumber: "096666666", authorize: "Trưởng bp thu mua Trưởng bp kĩ thuật", status: "Đang hoạt động", isEdit: "Sửa", isDelete: "Xóa"},
    {username: "nvd", password: "***", fullName: "Nguyễn Văn Duy", nickName: "Mr Duy bp thu mua", email: "duy@gmail.com", phoneNumber: "096666666", authorize: "Trưởng bp thu mua Trưởng bp kĩ thuật", status: "Đang hoạt động", isEdit: "Sửa", isDelete: "Xóa"},
    {username: "nvd", password: "***", fullName: "Nguyễn Văn Duy", nickName: "Mr Duy bp thu mua", email: "duy@gmail.com", phoneNumber: "096666666", authorize: "Trưởng bp thu mua Trưởng bp kĩ thuật", status: "Đang hoạt động", isEdit: "Sửa", isDelete: "Xóa"},
    {username: "nvd", password: "***", fullName: "Nguyễn Văn Duy", nickName: "Mr Duy bp thu mua", email: "duy@gmail.com", phoneNumber: "096666666", authorize: "Trưởng bp thu mua Trưởng bp kĩ thuật", status: "Đang hoạt động", isEdit: "Sửa", isDelete: "Xóa"},
    {username: "nvd", password: "***", fullName: "Nguyễn Văn Duy", nickName: "Mr Duy bp thu mua", email: "duy@gmail.com", phoneNumber: "096666666", authorize: "Trưởng bp thu mua Trưởng bp kĩ thuật", status: "Đang hoạt động", isEdit: "Sửa", isDelete: "Xóa"},
  ]

  constructions = [
    {constructionId: "MINHBOHO", constructionName: "MINH BOHO", address: "212 Điện Biên Phủ, Phú Nhuận", oganizationName: "Cty ABC", information: "info@abc 123321 Tòa nhà Vincom", representative: "Ms Thu", phoneNumber: "096666666", status: "Đang thi công", isEdit: "Sửa", isDelete: "Xóa"},
    {constructionId: "MINHBOHO", constructionName: "MINH BOHO", address: "212 Điện Biên Phủ, Phú Nhuận", oganizationName: "Cty ABC", information: "info@abc 123321 Tòa nhà Vincom", representative: "Ms Thu", phoneNumber: "096666666", status: "Đang thi công", isEdit: "Sửa", isDelete: "Xóa"},
    {constructionId: "MINHBOHO", constructionName: "MINH BOHO", address: "212 Điện Biên Phủ, Phú Nhuận", oganizationName: "Cty ABC", information: "info@abc 123321 Tòa nhà Vincom", representative: "Ms Thu", phoneNumber: "096666666", status: "Đang thi công", isEdit: "Sửa", isDelete: "Xóa"},
    {constructionId: "MINHBOHO", constructionName: "MINH BOHO", address: "212 Điện Biên Phủ, Phú Nhuận", oganizationName: "Cty ABC", information: "info@abc 123321 Tòa nhà Vincom", representative: "Ms Thu", phoneNumber: "096666666", status: "Đang thi công", isEdit: "Sửa", isDelete: "Xóa"},
    
  ]

  providers = [
    {providerName: "An Cường", contactPerson: "Ms Thu", phoneNumber: "096666666", email: "info@ancuong.vn", isEdit: "Sửa", isDelete: "Xóa"},
    {providerName: "An Cường", contactPerson: "Ms Thu", phoneNumber: "096666666", email: "info@ancuong.vn", isEdit: "Sửa", isDelete: "Xóa"},
    {providerName: "An Cường", contactPerson: "Ms Thu", phoneNumber: "096666666", email: "info@ancuong.vn", isEdit: "Sửa", isDelete: "Xóa"},
    {providerName: "An Cường", contactPerson: "Ms Thu", phoneNumber: "096666666", email: "info@ancuong.vn", isEdit: "Sửa", isDelete: "Xóa"},
    {providerName: "An Cường", contactPerson: "Ms Thu", phoneNumber: "096666666", email: "info@ancuong.vn", isEdit: "Sửa", isDelete: "Xóa"},
  ]
}