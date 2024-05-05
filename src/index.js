import React from 'react';
// import ReactDOM from 'react-dom/client';
import App from './App';
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from './Redux/store';

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);