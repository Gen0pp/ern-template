import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  };

  componentDidMount() {
    console.log('componentDidMount()');
  }

  render () {
    return (
      <div>
          <p>PLACEHOLDER</p>
      </div>
    );
  }
}

export default App;

