import React from 'react';
import './App.css';

import { Provider } from 'react-redux';
import store from './store';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Error404 from './pages/errors/Error404';
import Home from './pages/Home';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="*" element={<Error404 />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
