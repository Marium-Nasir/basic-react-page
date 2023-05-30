import React from 'react';
import reactDom from 'react-dom/client';
import './index.css';
import App from './App'


const container = document.getElementById('root');
const root = reactDom.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)