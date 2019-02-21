import React from 'react';

import './style.css';

const Snippet = props => {
  return (
    <div id={props.index} onClick={e => props.onTouch(e)} className="snippet">
      <h2 onClick={e => props.onTouch(e)}>{props.topic}</h2>
    </div>
  );
};

export default Snippet;
