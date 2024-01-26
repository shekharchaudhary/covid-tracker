import React from 'react';
import ReactDOM from 'react-dom/client';
import { Main } from './main';

import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
