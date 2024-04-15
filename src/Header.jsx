import React from 'react';

function Header() {
  return (
    <header className="header">
      <a href="#" className="logo">Pulkit's Portfolio</a>
      <nav className="navbar">
        <menu>
          <a href="#" className="active">Home</a>
          <a href="#about">About Me</a>
          <a href="#skills">Skills</a>
          <a href="#">Projects</a>
          <a href="#contactMe">Contact</a>
        </menu>
      </nav>
    </header>
  );
}

export default Header;
