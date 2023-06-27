import React from 'react';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Main from './main';


function App() {
  return (
    <MantineProvider>
      <Router>
        <Main />
      </Router>
    </MantineProvider>
  );
}

export default App;
