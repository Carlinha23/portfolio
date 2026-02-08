import React from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar1';
import Footer from './Footer';
import Skincare from './skincare1';
import CaseInvestDecoded from './CaseInvestDecoded';
import Landing from './Landing';

function AppContent() {
  const location = useLocation();
  const isLanding = location.pathname === '/';

  return (
    <div className="App">
      {!isLanding && <NavBar />}
      <Switch>
        {/* Landing page - cover page */}
        <Route exact path="/" component={Landing} />

        {/* Portfolio page with all sections */}
        <Route exact path="/portfolio" component={Home} />

        {/* Skincare route */}
        <Route path="/skincare" component={Skincare} />
        <Route path="/case/invest-decoded" component={CaseInvestDecoded}/>
      </Switch>
      {!isLanding && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
