import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../src/components/navbar/Navbar';
import ApplicationViews from './components/ApplicationViews'
import './index.css';

const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="main-content">
        <ApplicationViews />
      </div>
    </Router>
  )
}

export default App;
