import React from 'react';
import './App.css';
import InputNameFilter from './components/InputNameFilter';
import Table from './components/Table';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <InputNameFilter />
      <Table />
    </Provider>
  );
}

export default App;
