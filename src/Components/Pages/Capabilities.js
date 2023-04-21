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
                  <span className="tech-title">Laravel </span><span className="icon-link"><a title="The project repo" href="https://github.com/Antsamotady/laravel6-test-dashdoard"><BsGithub /></a></span>
                </div>
                <ul className="list-inline">
                  <li>Login</li>
                  <li>Form validation</li>
                  <li>Password resetting</li>
                  <li>Listing</li>
                  <li>Live search</li>
                  <li>Navigation menu</li>
                  <li>Dynamic DB update via AJAX</li>
                </ul>
              </div>
              <div className="task">
                <div className="tech-header">
                  <span className="tech-title">Symfony </span><span className="icon-link"><a title="The project repo" href="https://github.com/Antsamotady/"></a></span>
                </div>
                <ul className="list-inline">
                  <li>Docker containerization</li>
                  <li>Debugging and Troubleshooting</li>
                  <li>Application security with login rate limiting and URL obfuscation</li>
                  <li>Deployment</li>
                  <li>Remotely managing app through APIs</li>
                </ul>
              </div>
              <div className="task">
                <div className="tech-header">
                  <span className="tech-title">Reactjs </span><span className="icon-link"><a title="The project repo" href="https://github.com/Antsamotady/ResumePortfolio/tree/master"><BsGithub /></a></span>
                </div>
                <ul className="list-inline">
                  <li>Portfolio design</li>
                  <li><span className="mini-app-btn" onClick={this.hideMe}>Mini app</span></li>
                </ul>
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
                  <span className="tech-title">Bash Scripting </span><span className="icon-link"><a title="My stack profile" href="https://stackoverflow.com/users/9532910/antsamotady"><ImStackoverflow /></a></span>
                </div>
                <ul className="list-inline">
                  <li>Creating a script to automate page downloads</li>
                  <li>Cron automation</li>
                  <li>Web page parsing and data extraction</li>
                  <li>Database table optimization and data purification</li>
                  <li>Data integrity checks</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="job-position">
            <h2>CIO Assistant</h2>
            <div className="tasks">
              <div className="task">
                <div className="tech-header">
                  <span className="tech-title">System & Network Engineering </span><span className="icon-link"><a title="the repo" href="https://github.com/Antsamotady/"></a></span>
                </div>
                <ul className="list-inline">
                  <li>Operating system installation</li>
                  <li>Structured network cabling</li>
                  <li>Firewall rule-based filtering of network connections</li>
                </ul>
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
