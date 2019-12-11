import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Menu from './components/Menu';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      images: [
        'Img 01',
        'Img 02',
        'Img 03',
      ],
      renderizado: '',
    };
  }

  render() {
    return (
      <div className="App">
        <Menu images={this.state.images}/>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <h2>Welcome to React</h2> */}
      </div>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export default App;
