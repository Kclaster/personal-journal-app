import React from 'react';

import './style.css';

const FavoriteBar = props => {
  const displayPost = () => {
    if (props.diary[props.index]) {
      console.log(props.diary[props.index].date);
      return (
        <div>
          <h2>{props.diary[props.index].topic}</h2>
          <h3>{props.diary[props.index].date}</h3>
          <p>{props.diary[props.index].journal}</p>
        </div>
      );
    }
  };

  return (
    <div className="favorite-container">
      <h2>My Post</h2>
      {displayPost()}
    </div>
  );
};

export default FavoriteBar;
