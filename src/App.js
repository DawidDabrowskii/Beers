import Navbar from './components/Layout/Navbar';
import Home from './routes/Home';
import Footer from './components/Layout/Footer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App bg-gradient-to-br from-orange-950 via-yellow-900 to-black'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
