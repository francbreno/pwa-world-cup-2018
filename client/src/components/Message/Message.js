import React from 'react';

const TYPES = [
  'info',
  'success',
  'warning',
  'danger',
];

const defineTypeStyle = type => TYPES.includes(type) ? `is-${type}` : '';

const Message = ({ type, title, children, bodyOnly=false }) => {
  const typeStyleClass = defineTypeStyle(type);
  const containerStyleClasses = `message ${typeStyleClass}`;

  const headerContent = (
    <div className="message-header">
      <p>{title}</p>
    </div>
  );
  
  return (
    <article className={containerStyleClasses}>
      {!bodyOnly && headerContent}
      <div className="message-body">
        {children}
      </div>
  </article>
  );
}

export default Message;