import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="icon">
        <img src="http://images1.wikia.nocookie.net/__cb20130304122244/angrybirdsfanon/images/f/f0/Angry_Bird_red.png" alt="eye" />
        </div>
        <h2 className="name">Name: BHARATHI PRIYAN </h2>
        <p className="registration">Registration No: 212221040028</p>
        <button className="button" onClick={toggleDetails}>
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
        {showDetails && (
          <div className="details">
            Additional details or content can go here...
          </div>
        )}
      </div>
    </div>
  );
};

export default App;