import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import AppRouter from './router';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <AppRouter />
  </HashRouter>
);
