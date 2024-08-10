import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Navbar from './navbar/Navbar';
import PageContainers from './containers/PageContainers';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './Footer/Footer';
import Products from './pages/Products';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Navbar />
        <PageContainers className="flex-grow">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Ürünler' element={<Products />} />
          </Routes>
        </PageContainers>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
