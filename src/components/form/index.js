import React from 'react';

import './style.css';

const Form = props => {
  return (
    <form className="form" onSubmit={e => onSubmit(e, props)}>
      <label id="daily-post-label">Daily Post</label>
      <textarea
        id="daily-post-input"
        name="Daily Post"
        value={props.post}
        onChange={e => onType(e, props)}
      />
      <label className="input-label">Topic</label>
      <input
        className="input"
        value={props.topicPost}
        onChange={e => onType(e, props)}
        name="Topic"
        type="text"
      />
      <label className="input-label">Date</label>
      <input
        className="input"
        value={props.datePost}
        onChange={e => onType(e, props)}
        name="Date"
        type="date"
      />
      <input className="btn" type="submit" />
    </form>
  );
};

const onSubmit = (e, props) => {
  e.preventDefault();
  props.addDailyPost();
  props.clearDailyPost();
};

const onType = (e, props) => {
  let { name, value } = e.target;
  props.changePost(name, value);
};

export default Form;
