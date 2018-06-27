import React from 'react';

import './Card.css';

const Card = ({ header: Header, content: Content, footer: Footer }) => (
  <div className="card">
    <header className="card-header has-background-black">
      <Header />
    </header>
    <div className="card-content">
      <Content />
    </div>
    {Footer && (
      <footer className="card-footer">
        <Footer />
      </footer>
    )}
  </div>
);

export default Card;