import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configStore';
import Greeting from './components/greeting';
import Button from './components/button';
import './App.css';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Greeting />} />
          </Routes>
        </BrowserRouter>
        <Button className="greetBtn" />
      </header>
    </div>
  </Provider>
);

export default App;
