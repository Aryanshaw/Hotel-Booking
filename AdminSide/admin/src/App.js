// import logo from './logo.svg';
import  React  from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Home from './pages/Home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import NewHotel from './pages/newHotel/NewHotel';
import NewRoom from './pages/newRoom/NewRoom';
import Datatable from './pages/datatable/Datatable';
import { hotelColumns } from '../../../AdminSide/admin/src/datatablesource';
// import {react} from 'react'
import RoomData from '../../../AdminSide/admin/src/pages/RoomData/RoomData'
function App() {
  return (
    <Router>
    <Routes>
       <Route path='/' element={<Home/>}/>
       {/* <Route path='/hotels' element={<List/>}/> */}
       {/* <Route path='/hotels/:id' element={<Hotel/>}/> */}
       <Route path='/login' element={<Login/>}/>
       <Route path='/register' element={<Register/>}/>
       <Route path='/newHotel' element={<NewHotel/>}/>
       <Route path='/newRoom' element={<NewRoom/>}/>
       <Route path='/datatable' element={<Datatable />}/>
       <Route path='/RoomData' element={<RoomData />}/>
    </Routes>
   </Router>
  );
}

export default App;
