import { Routes, Route } from 'react-router-dom';
import Loyout from './components/Loyout/Loyout';

import HomePage from './pages/HomePage/HomePage';
import ProductsPage from './pages/ProductsPage/ProductsPage';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Loyout />}>
          <Route index path='/' element={<HomePage /> }/>
          <Route  path='/products' element={<ProductsPage /> }/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
