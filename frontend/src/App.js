import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';  
import NavBar from './NavBar1';
import Footer from './Footer';
import Skincare from './skincare1';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation Bar */}
        <NavBar />

        {/* Routes for different components */}
        <Switch>
          {/* Home route */}
          <Route exact path="/" component={Home} />
          
          {/* Skincare route */}
          <Route path="/skincare" component={Skincare} />
        </Switch>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
