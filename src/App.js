import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: null
    }

    this.fetchData = this.fetchData.bind(this);
  }

  fetchData() {
    const url = 'http://localhost:8000/api/getdata';

    axios.get(url).then(response => {
      this.setState({ result: response.data.backEndData })
    }).catch(error => {
      console.warn(error);
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="container">
          <div className='button'
            onClick={ this.fetchData }>Call Back End</div>
          { this.state.result
            && <div>{ this.state.result }</div> }
        </div>
      </div>
    );
  }
}

export default App;
