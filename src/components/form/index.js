import React from 'react';

const Form = props => {
  console.log(props);
  return (
    <div>
      <form>
        <label>Daily Post</label>
        <textarea onChange={e => onType(e, props)} />
        <label>Topic</label>
        <input type="text" />
        <label>Date</label>
        <input type="text" />
        <input type="submit" />
      </form>
    </div>
  );
};

const onType = (e, props) => {
  console.log(props);
  props.changePost(e.target.value);
};

export default Form;
