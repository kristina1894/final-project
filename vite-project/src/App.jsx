import React from 'react'
import { MantineProvider, Text } from '@mantine/core'
import Header from './components/Header'
import  './App.css'
import NewsCard from './components/NewsCard/NewsCard'


function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Header />
      <NewsCard />
    </MantineProvider>
  );
}

export default App;
