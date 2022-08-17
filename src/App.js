import React from 'react';
import './App.css';
import InputNameFilter from './components/InputNameFilter';
import NumFilter from './components/NumFilter';
import Table from './components/Table';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <InputNameFilter />
      <NumFilter />
      <Table />
    </Provider>
  );
}

export default App;
