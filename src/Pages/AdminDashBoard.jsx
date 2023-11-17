
import DashBoard from '../Components/DashBoardItem/DashBoard'
import SideBar from '../Components/SideBar/AdminSideBar'

const AdminDashBoard = () => {
  return (
    <div className='flex'>
      <SideBar></SideBar>
      <DashBoard></DashBoard>
      
    </div>
  )
}

export default AdminDashBoard