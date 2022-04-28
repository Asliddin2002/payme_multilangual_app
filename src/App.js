// import './App.css';
import Home from "./components/Home/Home";
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Trnasfer from './components/Transfers/Trnasfer'
import Payment from "./components/Payment/Payment";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/transfer" element={<Trnasfer/>} />
      <Route path="/payment" element={<Payment/>} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
