import React from 'react';

import Container from './components/container';
import background from './pics/background.jpg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: '',
      topicPost: '',
      datePost: '',
      diary: [],
      index: null
    };
  }

  displayPost = index => {
    if (index) {
      index = index.target.id;
      this.setState({
        index: index
      });
    }
  };

  changeDailyPost = (name, input) => {
    if (name === 'Daily Post') {
      this.setState({
        post: input
      });
    } else if (name === 'Topic') {
      this.setState({
        topicPost: input
      });
    } else if (name === 'Date') {
      this.setState({
        datePost: input
      });
    }
  };

  addDailyPost = () => {
    this.setState({
      diary: [
        ...this.state.diary,
        {
          journal: this.state.post,
          topic: this.state.topicPost,
          date: this.state.datePost
        }
      ]
    });
  };

  clearDailyPost = () => {
    this.setState({
      post: '',
      topicPost: '',
      datePost: ''
    });
  };

  render() {
    let { post, index, diary, datePost, topicPost } = this.state;
    return (
      <div>
        <img className="background" src={background} />
        <Container
          index={index}
          onTouch={this.displayPost}
          diary={diary}
          datePost={datePost}
          topicPost={topicPost}
          clearDailyPost={this.clearDailyPost}
          addDailyPost={this.addDailyPost}
          post={post}
          changePost={this.changeDailyPost}
        />
      </div>
    );
  }
}

export default App;
