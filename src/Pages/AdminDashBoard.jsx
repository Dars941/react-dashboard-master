
import SideBar from '../Components/SideBar/AdminSideBar'

const AdminDashBoard = () => {
  return (
    <div className='flex'>
      <SideBar></SideBar>
      <div className='p-7 text-2xl text-black  bg-red-500 w-screen font-semibold'>HomePage</div>
    </div>
  )
}

export default AdminDashBoard