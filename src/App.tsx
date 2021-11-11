import { GlobalStyles } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import Content from './components/Content';
import Header from './components/Header';

function App() {
  const theme = useTheme();

  return (
    <>
      <GlobalStyles
        styles={{
          html: {
            height: '100%',
          },
          body: {
            background: theme.palette.background.default,
            margin: 0,
            height: '100%',
          },
        }}
      />
      <Header />
      <Content />
    </>
  );
}

export default App;
