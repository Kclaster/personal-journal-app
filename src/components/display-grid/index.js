import React from 'react';

import Snippet from '../snippet';
import './style.css';

const DisplayGrid = props => {
  return (
    <div className="display-container">
      {props.diary.map(function(cur, index) {
        return (
          <Snippet
            onTouch={props.onTouch}
            key={index}
            topic={cur.topic}
            journal={cur.journal}
            date={cur.date}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default DisplayGrid;
