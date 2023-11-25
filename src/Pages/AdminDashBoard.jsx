
import { Route, Routes,  } from 'react-router-dom';
import Staff from '../Components/AdminDashBoardItem/Staff';
import SideBar from '../Components/SideBar/AdminSideBar';
import Department from '../Components/AdminDashBoardItem/Department';

const AdminDashboard = () => {
  return (
    <div className='flex'>
      <SideBar />
      <div className='content'>
        <Routes>
          <Route path='/staff' element={<Staff />} />
          <Route path='/department' element={<Department />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
