import React from 'react';
import { Provider } from 'react-redux'

import store from './redux/store'
import CakeContainer from './components/CakeContainer';

import './App.css';
import HooksCakeContainer from './components/HooksCakeContainer';
import IcecreamContainer from './components/IcecreamContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
        <IcecreamContainer />
      </div>
    </Provider>
  );
}

export default App;
