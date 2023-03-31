import React, { Component } from 'react';

import "../../Stylesheets/capabilities.css";
import "../../Stylesheets/miniapp.css";

import Counters from '../Counters';

class Capabilities extends Component {
  state = {
    shown: false,
    counters: [{id:0, value:0}]
  }
  hideMe = () => {
    this.setState({shown : !this.state.shown})
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

  render () {
    return (
      <div className="app-container">
        <div className="capabilities-container">
          <div className="job-position">
            <h2>Web Development</h2>
            <div className="tasks">
              <div className="task">
                <h3>Laravel</h3>
                <p>Login; Form validation; Password resetting; Listing; Live search; Navigation menu; Dynamic DB update via AJAX...</p>
              </div>
              <div className="task">
                <h3>Symfony</h3>
                <p>Docker containerization; Debugging and Troubleshooting; Application security with login rate limiting and URL obfuscation; Deployment; Remotely managing app through APIs...</p>
              </div>
              <div className="task">
                <h3>Reactjs</h3>
                <p>Portfolio design; <span onClick={this.hideMe}>Mini app</span></p>
              </div>
              <div className="mini-app">
                {this.state.shown
                  ? <div className="mini-app-container scale-up-ver-center">
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
                  : null
                }
              </div>
            </div>
          </div>

          <div className="job-position">
            <h2>Linux Programming</h2>
            <div className="tasks">
              <div className="task">
                <h3>Bash programming</h3>
                <p>Creating a script to automate page downloads; Cron automation; Web page parsing and data extraction; Database table optimization and data purification; Data integrity checks...</p>
              </div>
            </div>
          </div>

          <div className="job-position">
            <h2>CIO Assistant</h2>
            <div className="tasks">
              <div className="task">
                <h3>System and Network Engineering</h3>
                <p>Operating system installation; Structured network cabling; Firewall rule-based filtering of network connections...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
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

export default Capabilities;
