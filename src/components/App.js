
import React, { Component } from "react";
import './../styles/App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = { count: 0 }
  }
  increaseCount = () => {
    const curr = this.state.count;
    console.log('cliked');

    this.setState({
      count: curr + 1
    });
  }
  render(){
    return(
      <div>
        <p>Button clicked {this.state.count} times</p>
        <button onClick={this.increaseCount}>Click me</button>
      </div>
    )
  }
}

export default App
