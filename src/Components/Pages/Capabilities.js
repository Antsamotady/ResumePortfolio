import React, { Component } from 'react';

import { BsGithub } from 'react-icons/bs';
import { ImStackoverflow } from 'react-icons/im';

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
                <div className="tech-header">
                  <span className="tech-title">Laravel </span><span className="icon-link"><a href="https://github.com/Antsamotady/laravel6-test-dashdoard"><BsGithub /></a></span>
                </div>
                <p>Login; Form validation; Password resetting; Listing; Live search; Navigation menu; Dynamic DB update via AJAX...</p>
              </div>
              <div className="task">
                <div className="tech-header">
                  <span className="tech-title">Symfony </span><span className="icon-link"><a href="https://github.com/Antsamotady/"></a></span>
                </div>
                <p>Docker containerization; Debugging and Troubleshooting; Application security with login rate limiting and URL obfuscation; Deployment; Remotely managing app through APIs...</p>
              </div>
              <div className="task">
                <div className="tech-header">
                  <span className="tech-title">Reactj </span><span className="icon-link"><a href="https://github.com/Antsamotady/ResumePortfolio"><BsGithub /></a></span>
                </div>
                <p>Portfolio design; <span className="mini-app-btn" onClick={this.hideMe}>Mini app</span></p>
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
                <div className="tech-header">
                  <span className="tech-title">Bash Scripting </span><span className="icon-link"><a href="https://stackoverflow.com/users/9532910/antsamotady"><ImStackoverflow /></a></span>
                </div>
                <p>Creating a script to automate page downloads; Cron automation; Web page parsing and data extraction; Database table optimization and data purification; Data integrity checks...</p>
              </div>
            </div>
          </div>

          <div className="job-position">
            <h2>CIO Assistant</h2>
            <div className="tasks">
              <div className="task">
                <div className="tech-header">
                  <span className="tech-title">System & Network Engineering </span><span className="icon-link"><a href="https://github.com/Antsamotady/"></a></span>
                </div>
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
      return null;
    })
    
    return total;
  }
}

export default Capabilities;
