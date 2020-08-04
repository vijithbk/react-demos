import React from 'react';

import Header from './components/Header';
import Balance from './components/Balance';

import './App.css';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionsList from './components/TransactionsList';
import Transaction from './components/Transaction';

function App() {
  return (
    <div class="app">
      <Header />
      <div class="container">
        <Balance />
        <IncomeExpenses />
        <TransactionsList />
        <Transaction />
      </div>
    </div>
  );
}

export default App;
