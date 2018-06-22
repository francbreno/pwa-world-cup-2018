import React from 'react';

import './Accordion.css';
import '../../../node_modules/bulma-accordion/dist/js/bulma-accordion.min.js';

const Accordion = ({ header, children }) => (
  <section className="accordions">
    <article className="accordion">
      <div className="accordion-header toggle">
        <p>{header}</p>
      </div>
      <div className="accordion-body">
        <div className="accordion-content">
          {children}
        </div>
      </div>
    </article>
  </section>
);

export default Accordion;