import React, { Component } from 'react';
import './Stylesheets/main.css';
import Counters from './Components/Counters';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0},
      { id: 2, value: 2},
      { id: 3, value: 6},
      { id: 4, value: -1},
    ]
  }

  handleAddItem = () => {
    const newItem = {id: Date.now(), value: 0}
    const counters = [...this.state.counters, newItem];

    this.setState({ counters });
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    
    counters[index] = { ...counter };
    counters[index].value++;

    this.setState({ counters });
  }

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    
    counters[index] = { ...counter };
    counters[index].value--;

    this.setState({ counters });
  }

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters})             // {counters: counters} key has the same name as value here
  }

  render() {
    return (
      <React.StrictMode>
        <div className='main'>
          <h2>Hi!!</h2>
          <div className='container'>
            <Counters 
              counters = {this.state.counters}
              totalCounters = {this.totalCount()}
              onAddItem = {this.handleAddItem}
              onReset={this.handleReset}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
            />
          </div>
        </div>
        <div className='dedicace'>&lt;3&nbsp;&nbsp;&nbsp;Ly</div>
      </React.StrictMode>
    );
  }

  totalCount() {
    let total = 0;
    this.state.counters.map(c => {
      total += c.value;
    })
    
    return total;
  }
}

export default App;
