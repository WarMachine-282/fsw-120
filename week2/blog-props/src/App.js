import React from 'react';

import BlogPost from './components/BlogPost';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import './style.css';


const App = () => {
  return (
    <div className="blogs">
      <Navbar />
      <Header />
      <BlogPost />
      <Footer />
    </div>
  )
}
    
export default App;
