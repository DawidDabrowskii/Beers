import Navbar from './components/Layout/Navbar';
import Home from './routes/Home';
import SingleBeerDetails from './components/Other/SingleBeerDetails';
import AboutUs from './routes/AboutUs';
import PageNotFound from './routes/PageNotFound';
import RandomBeer from './components/Other/RandomBeer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details/:beerId' element={<SingleBeerDetails />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/random' element={<RandomBeer />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
