import "./App.css";
import Main from "./pages/Main";
import { Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Listing from "./pages/Listing";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product" element={<Product />} />
        <Route path="/listing" element={<Listing />} />
      </Routes>
    </div>
  );
}

export default App;
