import { StrictMode } from 'react';
import { hydrate, render } from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './App';
import { store } from './store';

const rootElement = document.getElementById('root');

const Node = () => (
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

if (rootElement!.hasChildNodes()) {
  hydrate(<Node />, rootElement);
} else {
  render(<Node />, rootElement);
}
