import { Outlet } from 'react-router-dom';
import AdminDashboardSideNav from '../Admin/AdminDashboardSideNav';
import Navbar from './AdminDashBoardNav';

function AdminDashbordLayout() {
  return (
    <div className="bg-dashgrey flex flex-col  min-h-screen">
      <div className="fixed bg-white top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <div>
        <div className="mt-16  overflow-y-auto">
          <AdminDashboardSideNav />
        </div>
        <div className="p-4 lg:ml-[200px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminDashbordLayout;
