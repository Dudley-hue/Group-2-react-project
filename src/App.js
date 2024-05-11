import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './components/Products';
import Cart from './components/Cart';
import Review from './components/Review';
import { useEffect, useState } from 'react';
import ProductDetails from './components/ProductDetails';
import reviewData from './components/Reviewdata';
import AddProduct from './components/AddProduct';

const API = "http://localhost:3000/cloth"

function App() {
  // const { productItems } = data;
  const [productItems, setproductItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(()=> {fetch(API)
    .then((res) => res.json())
    .then(setproductItems)
  }, []);

  const handleAddProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity - 1 }
            : item
        )
      );
    }
  };


  const handleCartClearance = () => {
    setCartItems([]);
  };

  return (
    <div className="App">
      <Router>
        <Header cartItems={cartItems} />
        <Routes>

          <Route path="/" element={<Products productItems={productItems} handleAddProduct={handleAddProduct}/>}/>
          <Route path="/cart" element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance}/>}/>
          <Route path="/product/:id" element={<ProductDetails/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
