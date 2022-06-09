import React from 'react';

function ButtonComponent(props) {
  const {label, className} = props;
  return (
    <button className="btn">
      <span className={className}>{label}</span>
    </button>
  )
}

export default ButtonComponent;