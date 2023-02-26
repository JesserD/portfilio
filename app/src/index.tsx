import { ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react';
import * as React from 'react';
import ReactDOM from 'react-dom';
import App from './app/layout/App';
import { store, StoreContext } from './app/store/store';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <StoreContext.Provider value={store}>
        <App />
      </StoreContext.Provider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
