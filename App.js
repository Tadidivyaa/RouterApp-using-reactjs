//import logo from './logo.svg';
import './App.css';
import {Routes,Route } from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import NoPage from './Components/NoPage'
import Navbar from './Components/Navbar';
import Product from './Components/Product';
import UpcomingProduct from './Components/UpcomingProduct';
import AvailableProduct from './Components/AvailableProduct';
function App() {
  return (
       <div className="App">
      <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/about' element={<About />} />
       <Route path='*' element={<NoPage />} />
       <Route path='/product' element={<Product />} />
       <Route path='/availableprod' element={<AvailableProduct/>} />
       <Route path='/upcomingprod' element={<UpcomingProduct/>} />
      </Routes>
      <Navbar/>
      </div>
  );
}

export default App;
