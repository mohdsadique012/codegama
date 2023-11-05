
import './App.css';
import Footer from "./Footer"
import Navbar from "./Layout/Navbar"
import Jumbotron from './Layout/Jumbotron';
import LandingPage from './Component/LandingPage/LandingPage';
import AddCart from "./Component/AddCart.js/AddCart"
import ProductPage from './Component/Productpage/ProductPage';
import { Routes, Route } from "react-router-dom";
function App() {
  return (
   <>  
   <Navbar />
   <AddCart />
   <Routes>
   
   <Route exact path="/" element={<LandingPage />}></Route>
   <Route path="/Product/:id" element={<ProductPage />}></Route>

      
   </Routes>
    <Footer />
   </>
  );
}

export default App;
