import React from 'react';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Main from './main';
import './App.css';

function App() {
  return (
    <MantineProvider>
      <Router>
        <Header />
        <Main />
      </Router>
    </MantineProvider>
  );
}

export default App;
