import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Create a root for the React application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component as the root of the React application
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Report web vitals metrics
reportWebVitals();
