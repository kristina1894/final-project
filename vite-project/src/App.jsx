import React from 'react'
import { MantineProvider, Text } from '@mantine/core'
import Header from './components/Header'
import  './App.css'


function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Header />
    </MantineProvider>
  );
}

export default App;
