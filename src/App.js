import React, { Component} from 'react'; 
import logo from './logo.svg';
import './App.css';
class  Text extends Component {
  render(){
  return(
     <span style={{color: this.props.color}}>{this.props.children}</span>
  )}}
class App extends Component {
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <h1>Hello,<Text color ="blue"> Delvric</Text></h1>{/*<Text></Text>*/}Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}
export default App;
