import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './components/sidebar/Sidebar'
import App from './App';

ReactDOM.render( 
  <React.StrictMode>
        
    <App />


  </React.StrictMode>,
  document.getElementById('root') // Eu irei renderizar o App na div quem tem por id=root
);

