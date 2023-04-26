import React from 'react';
import ReactDOM from 'react-dom/client';
import './dist/css/main.css';
import App from './App';
import FleetContext from './context/FleetContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FleetContext>
      <App />
    </FleetContext>
  </React.StrictMode>
);
