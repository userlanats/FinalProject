import "./App.css";
import Main from "./pages/Main";
import { Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Product" element={<Product/>} />

      </Routes>
    </div>
  );
}

export default App;
