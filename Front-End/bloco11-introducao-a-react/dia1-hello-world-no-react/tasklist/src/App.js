import './App.css';
import React from 'react';
const Task = (value) => {
  return (
    <li>{value}</li>
  );
}
const tasks = ['limpar o quarto', 'estudar', 'lavar o quintal' ]

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <ul>{tasks.map((el) => Task(el))}</ul>
    </div>
  )
}
}

export default App;
