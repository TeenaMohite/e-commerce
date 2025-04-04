import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Login from './components/Login';
import SignIn from './components/SignIn';
import Admin from './components/Admine';  

import Header from './components/Header';
import Offer2 from './components/Offer2';
import SlideShow from './components/SlideShow';
import Promo from "./components/Promo";

// Category Pages 
import ElectronicsPage from "./components/segments/ElectronicsPage";
import PlumbingPage from "./components/segments/PlumbingPage";
import OrganicPage from "./components/segments/OrganicPage";
import LaundryPage from "./components/segments/LaundryPage"; 
import ProductDetailsPage from './components/ProductDetails';
import { CartPage, WishlistPage } from './components/cart/CartPage';
import BeautyPage from './components/segments/Beauty';
import HomeDecorPage from './components/segments/HomeDecore';
import ClothingPage from './components/segments/ClothingPage';
import KidsPage from './components/segments/KidsPage';
import ProfilePage from './components/ProfilePage';
import AboutUs from './components/About';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/promo" element={<Promo />} />
        <Route path="/offer2" element={<Offer2 />} />
        <Route path="/slideshow" element={<SlideShow />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        

        {/* Category Pages */}
  
        <Route path="/category/laundry" element={<LaundryPage />} />
        <Route path="/category/electronics" element={<ElectronicsPage />} />
        <Route path="/category/plumbing" element={<PlumbingPage />} />
        <Route path="/category/organic" element={<OrganicPage />} />
        <Route path="/category/electronics" element={<ElectronicsPage />} />
          <Route path="/category/beauty" element={<BeautyPage />} />
          <Route path="/category/home-decor" element={<HomeDecorPage />} />
          <Route path="/category/clothing" element={<ClothingPage />} />
       <Route path="/category/kids-toys" element={<KidsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
