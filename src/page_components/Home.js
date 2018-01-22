import React, { Component } from 'react';

// a basic component for the home page, nothing too fancy
class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>This is a Giphy search App</h1>
        <img src="https://media.giphy.com/media/NOC9vF7gWkmXu/giphy.gif" alt="Is that Dean Cain?" />
      </div>
    );
  }
}

export default Home;