import logo from './logo.svg';
import './App.css';
import {Rotes,Route, Routes} from "react-router-dom"
import {Home} from "./components/Home"
import { About } from './components/About';
import { Product } from './components/Product';
import { Navbar } from './components/Navbar';
import { Productdetail } from './components/productdetails';

function App() {
  return (
    <div className="App">
    <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/products" element={<Product/>}></Route>
      <Route path="/products/:id" element={< Productdetail/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
