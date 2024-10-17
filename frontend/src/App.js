import React from 'react';
import Home from './Home';  
import NavBar from './NavBar';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <NavBar />

      {/*Home component */}
      <Home />

      {/*Footer*/}
      <Footer />
    </div>
  );
}

export default App;
