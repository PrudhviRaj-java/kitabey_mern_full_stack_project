import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BooksDetails from './Components/BooksDetails/Index';
import Footer from './Components/Footer/Index';
import Cart from './Components/Cart';
import Header from './Components/Header';
import Images from './Components/Images/Index';
import Coursol from './Components/Coursol/index';
import { CartProvider } from "./Components/CartContext";
import Payment from './Components/Payment'; // Import the Payment component

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<BooksDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Payment />} /> {/* Add route for Payment component */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
