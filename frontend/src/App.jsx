import React from "react";
import Manufacturer from "./Components/Manufacturer";
import Supplier from "./Components/Supplier";
import Customer from "./Components/Customer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/HomePage";
import QRCodeGenerator from "./Components/QrCode";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/manufacturer" element={<Manufacturer />} />
          <Route path="/supplier" element={<Supplier />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/qrcode" element={<QRCodeGenerator />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
