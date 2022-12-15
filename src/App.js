import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Store } from './pages/Store';
import { Cart } from './pages/Cart';
import { Navbar } from './pages/Navbar';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Store />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<h1>Page not found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
