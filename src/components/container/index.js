import React from 'react';

import DisplayGrid from '../display-grid';
import Form from '../form';
import FavoriteBar from '../favorite-bar';
import './style.css';

const Container = props => {
  return (
    <div className="container">
      <h1>Diary</h1>
      <Form
        datePost={props.datePost}
        topicPost={props.topicPost}
        clearDailyPost={props.clearDailyPost}
        addDailyPost={props.addDailyPost}
        changePost={props.changePost}
        post={props.post}
      />
      <DisplayGrid onTouch={props.onTouch} diary={props.diary} />
      <FavoriteBar index={props.index} diary={props.diary} />
    </div>
  );
};

export default Container;
