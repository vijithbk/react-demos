import React from 'react';
import { Provider } from 'react-redux'

import store from './redux/store'

import Container from './components/container/container'

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App container">
        <header className="App-header">
          <h1>Grocery store</h1>
        </header>
        <Container />
      </div>
    </Provider>
  );
}

export default App