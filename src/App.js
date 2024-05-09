import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Product from "./Pages/Product";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Signup from "./Pages/Signup";
import ShopCategory from "./Pages/ShopCategory";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";
import Details from "./Pages/Details";
import Breadcrumb from "./Components/Breadcrumb/Breadcrumb";
import Checkout from "./Components/Checkout/Checkout";
import Policy from "./Pages/Policy";
import Terms from "./Pages/Terms";
import Headroom from "react-headroom";
import Confirm from "./Components/Checkout/Confirm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Headroom>
          <Navbar />
        </Headroom>
        {/* <Breadcrumb/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/category" element={<ShopCategory />} />
          <Route path="/login" element={<Login />} />
          <Route path="/order" element={<Confirm />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/Policy" element={<Policy />} />
          <Route path="/Terms-and-conditions" element={<Terms />} />
          {/* <Route path='/:id' element = {<Product/>}/> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
