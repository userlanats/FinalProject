import "./App.css";
import Main from "./pages/Main";
import { Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Listing from "./pages/Listing";
import Cart from "./pages/Cart";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
