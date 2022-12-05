import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import reducer, { initialState } from './Context/reducer';
import { StateProvider } from './Context/StateProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <StateProvider reducer={reducer} initialState={initialState}>
      <App />
    </StateProvider>
  </React.StrictMode>
);