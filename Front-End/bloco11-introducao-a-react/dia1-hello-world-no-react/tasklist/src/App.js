import logo from './logo.svg';
import './App.css';
import React from 'react';
const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <ul>{Task('oi')}</ul>
    </div>
  )
}
}

export default App;
