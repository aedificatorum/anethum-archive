import React from 'react';
import './App.css';
import {ThemeProvider, CSSReset} from '@chakra-ui/core'

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <button onClick={async () => {
        const yo = await fetch("/api")
        alert(await yo.text())
        }}>Click Me</button>
    </ThemeProvider>
  );
}

export default App;
