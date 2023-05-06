import React from 'react';
import ReactDOM from 'react-dom/client';
import './dist/css/main.css';
import App from './App';
import FleetContext from './context/FleetContext';
import SelectedCarContext from './context/SelectedCarContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FleetContext>
      <SelectedCarContext>
        <App />
      </SelectedCarContext>
    </FleetContext>
  </React.StrictMode>
);
