import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Desktop/Navbar';
import Products from './components/Products/Products';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';

function App() {
  return (
   
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/products" element={<Products/>} />
        <Route exact path = "/products/:id" element={<Product />} />
        <Route exact path = "/cart" element={<Cart />} />
      </Routes>
    </div>
    
  );
}

export default App;
