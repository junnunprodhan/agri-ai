import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import Introduction from './components/Introduction';
import About from './components/About';
import GetInvolved from './components/GetInvolved';
import Services from './components/Services';
import HalalInvestment from './components/HalalInvestment';
import ChangemakerInBD from './components/ChangemakerInBD';
import GetStarted from './components/GetStarted';
import JoinUs from './components/JoinUs';

function App() {
  return (
    <div>
      <NavigationBar />
      <Home />
      <Introduction />
      <About />
      <GetInvolved />
      <Services />
      <HalalInvestment />
      <ChangemakerInBD />
      <GetStarted />
      <JoinUs />
    </div>
  );
}

export default App;