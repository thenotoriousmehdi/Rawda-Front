import React from 'react';

function Accordion({ title, content, isOpen, toggleSection }) {
  return (
    <div className="accordion">
      <div className="accordion-title" onClick={toggleSection}>
        {title}
        <i className={`fa fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
}

export default Accordion;