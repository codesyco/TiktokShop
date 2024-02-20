
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Product from './Pages/Product';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Signup from './Pages/Signup';
import ShopCategory from './Pages/ShopCategory';
import Profile from './Pages/Profile';
import Login from './Pages/Login';
import Details from './Pages/Details';
import Breadcrumb from './Components/Breadcrumb/Breadcrumb';
import Checkout from './Components/Checkout/Checkout';

function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <div >
        <BrowserRouter>
          <Navbar/>
          <Breadcrumb/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/products' element={<Product/>}>
              <Route path=':productId' element={<Product/>}/>
            </Route>
            <Route path='/cart' element={<Cart/>} />
            <Route path='/checkout' element={<Checkout/>} />
            <Route path='/category' element={<ShopCategory/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Signup/>} />
            <Route path='/profile' element={<Profile/>} />
            {/* <Route path='/:id' element = {<Product/>}/> */}
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
