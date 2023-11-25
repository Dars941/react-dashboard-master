import { Navigate, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import SideBar from './Components/SideBar/AdminSideBar';
import Staff from './Components/AdminDashBoardItem/Staff';
import Department from './Components/AdminDashBoardItem/Department';
import Login from './Pages/Login';

const App = () => {
  const currentUser = true;

  const Layout = () => {
    return (
      <div className='flex'>
        <SideBar />
        <Outlet />
      </div>
    );
  };

  // eslint-disable-next-line react/prop-types
  const ProtectedRoute = ({ element }) => {
    return currentUser ? (
      element
    ) : (
      <Navigate to="/login" />
    );
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProtectedRoute element={<Layout />} />
      ),
      children: [
        {
          path: '/staff',
          element: <Staff />,
        },
        {
          path: '/department',
          element: <Department />,
        },
      ],
    },
    {
      path: '/login',
      element: <Login />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
