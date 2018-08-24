import React, { Component } from 'react';

class App extends Component {
  render() {
    console.log(process.env.PUBLIC_URL);
    return <div className="App" />;
  }
}

export default App;
