// import { Route } from 'react-router'
import './App.css'
import Navigation from './components/Navigation'
import { Routes, Route, Link } from 'react-router-dom'

import Login from './pages/login.jsx'
import Home from './pages/home.jsx'
import Product from './pages/product.jsx'
import AboutUs from './pages/aboutus.jsx'
import Contactus from './pages/contactus.jsx'
import Profile from './pages/profile.jsx'
import Cart from './cart.jsx'
import LoginPage from './pages/LoginPage.jsx'
import AllCatagory from './pages/Cards.jsx'
import ProductDetails from './pages/ProductDetails.jsx'

function App() {

  return (
    <>
      <Navigation />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Register' element={<Login />} />
        <Route path='/LoginPage' element={<LoginPage />} />
        <Route path='/product' element={<Product />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<Contactus />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/AllCatagory' element={<AllCatagory />} />
        <Route path='/product-details/:editId' element={<ProductDetails />} />
      
      </Routes>
    </>
  )
}


export default App
