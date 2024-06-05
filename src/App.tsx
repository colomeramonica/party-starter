import React from 'react';
import { ThemeProvider } from '@mui/material';
import theme from './theme';
import RootComponent from './RootComponent';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <RootComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;