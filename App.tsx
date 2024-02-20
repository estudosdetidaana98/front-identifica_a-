import React from 'react';
import './App.css';
import Home from './paginas/home/home';
import Navbar from './components/navBar/navBar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Footer/>
    </>
);
}
export default App;