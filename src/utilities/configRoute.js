import HomePage from "../features/HomePage/HomePage";

const configRoute = [
  {
    path: '/',
    element: HomePage,
  
  },
  {
    path: '/home',
    element: HomePage,
   
  },
  // {
  //   path: 'admin',
  //   element: Admin,
  //   role: ['QuanTri'],
  // },
  // {
  //   path: 'detail/:id',
  //   element: MovieDetail,
  //   role: ['KhachHang', 'KhachVangLai'],
  // },
  // {
  //   path: 'ticketroom/:maLichChieu',
  //   element: MovieBooking,
  //   role: ['KhachHang', 'KhachVangLai'],
  // },
  // {
  //   path: 'profile/:taiKhoan',
  //   element: Profile,
  //   role: ['KhachHang'],
  // },
];
export default configRoute;