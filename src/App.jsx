import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar';
import Approutes from './approutes'; 
import Footer from './components/footer'; 

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="pt-16 md:pt-20"></div>
      <Approutes /> 
      <Footer/>
    </BrowserRouter>
  );
}

export default App;