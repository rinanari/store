import React from 'react';
import Banners from './components/Banners';
import Products from './components/Products';
import 'normalize.css'
import './styles/App.css'
import MainPage from './components/MainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from './store';

import Modal from './components/Modal';

const store = setupStore()
function App() {
  

  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
         {/* <Route path='/products/:id' element={<Modal />}></Route> */}
        
        </Routes>
      </BrowserRouter>
    </Provider>
    </>
  );
}

export default App;
