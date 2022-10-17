import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <Router>
      
      <div className='App'>
        <Nav />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/shop' element={<Shop/>} />
        </Routes>
      </div>
      
    </Router>
  )
}

export default App;
