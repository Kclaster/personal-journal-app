import React from 'react';

import Container from './components/container';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: []
    };
  }

  changeDailyPost = input => {
    this.setState({
      post: [...this.state.post, input]
    });
  };

  render() {
    let { post } = this.state;
    return (
      <div>
        <Container post={post} changePost={this.changeDailyPost} />
      </div>
    );
  }
}

export default App;
