import React from 'react';

import DisplayGrid from '../display-grid';
import Form from '../form';
import FavoriteBar from '../favorite-bar';

const Container = props => {
  return (
    <div>
      <h1>Diary</h1>
      <Form changePost={props.changePost} post={props.post} />
      <DisplayGrid />
      <FavoriteBar />
    </div>
  );
};

export default Container;
