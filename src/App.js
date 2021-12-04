import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './navigation/navigation';

import './styles/global/global.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navigation />
      </Router>
    </div>
  );
}

export default App;