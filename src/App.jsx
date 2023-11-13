import React from 'react';
import Login from './Pages/Login';
import { Route, Routes } from 'react-router-dom';
import Register from './Pages/Register';
import StudentDashBoard from './Pages/StudentDashBoard';

const App = () => {
  return (
    <div >
      <Routes>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/register' element = {<Register/>}/>
        <Route path='/student-dashboard' element = {<StudentDashBoard/>}/>
        
      </Routes>
    </div>
  );
};

export default App;
