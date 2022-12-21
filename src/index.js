import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import BookProvider from './contexts/BookContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BookProvider>
    <App />
  </BookProvider>
);
