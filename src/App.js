import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Firstnav from './components/Firstnav';
import Secondnav from './Secondnav';
import Data from './components/db.json';
import { BrowserRouter,Navigate,Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Account from './components/Account';
import Giftcard from './components/Giftcard';
import Order from './components/Order';
import Wishlist from './components/Wishlist';
import Customer from './components/Customer';
import Crosswordfooter from './components/Crosswordfooter';
import Buynow from './components/Buynow';
import { createContext } from 'react';
import Slider123 from './components/Slider123';
// import Login from './components/Login';
import GuestLayout from './components/GuestLayout';

function App() {
  
  return (
    <BrowserRouter>
    <Firstnav/>
    <Secondnav/>
    <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='Login' element={<Login/>}/>
              <Route path='Account' element={<Account/>}/>
              <Route path='Giftcard' element={<Giftcard/>}/>
              <Route path='Order' element={<Order/>}/>
              <Route path='Wishlist' element={<Wishlist/>}/>
              <Route path='Customer' element={<Customer/>}/>              
              
      </Routes>
      <Crosswordfooter/>
     
    </BrowserRouter>
    
  );
}

export default App;
