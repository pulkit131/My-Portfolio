import React from 'react';
import './portfolio.css'; // Import the CSS file
import Header from './Header'; // Import Header component
import About from './About'; // Import About component
import Contact from './Contact'; // Import Contact component
import Skills from './Skills'; // Import Skills component
import Home from './Home'; // Import Home component

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
