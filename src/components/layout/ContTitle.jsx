import React from 'react';

const ContTitle = props => {
  return (
    <div className="cont__title">
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
    </div>
  );
};

export default ContTitle;
