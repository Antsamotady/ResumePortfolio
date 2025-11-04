import React, { Component } from 'react';
import { LanguageContext } from '../../LanguageContext';

import { BsGithub } from 'react-icons/bs';
import { ImStackoverflow } from 'react-icons/im';

import "../../Stylesheets/capabilities.css";
import "../../Stylesheets/miniapp.css";

import Counters from '../Counters';

class Capabilities extends Component {
  static contextType = LanguageContext;

  state = {
    shown: false,
    counters: [{ id: 0, value: 0 }]
  }
  hideMe = () => {
    this.setState({ shown: !this.state.shown })
  }

  handleAddItem = () => {
    const newItem = { id: Date.now(), value: 0 }
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
    this.setState({ counters })             // {counters: counters} key has the same name as value here
  }

  render() {
    const { t } = this.context;

    return (
      <div className="app-container">
        <div className="capabilities-container">
          <div className="job-position">
            <h2>{t('capWebDevelopment')}</h2>
            <div className="tasks">
              <div className="task">
                <div className="tech-header">
                  <span className="tech-title">Symfony </span><span className="icon-link"><a title="The project repo" href="https://github.com/Antsamotady/"></a></span>
                </div>
                <ul className="list-inline">
                  <li>Back-end development using Symfony (versions 2, 3.4, 5.4, 6.4)</li>
                  <li>Project maintenance and evolution, including upgrades (Symfony v3.4 &rarr; v5.4 &rarr; v6.4)</li>
                  <li>Development of new projects using Symfony 5.4</li>
                  <li>API management and integration, including API Platform for internal APIs</li>
                  <li>Implementation of online payment via PayPal using the SDK</li>
                  <li>Payment gateway integration with Sogecommerce (credit card processing)</li>
                  <li>Spreadsheet file import/export, handling large files</li>
                  <li>User management: permissions, session handling, password reset, "remember me" functionality</li>
                  <li>Security integration: JWT token authentication for secure login</li>
                  <li>Asset management with Symfony-UX and Stimulus</li>
                  <li>Real-time notification system using Symfony Mercure (Server-Sent Events, SSE)</li>
                  <li>Email system automation</li>
                  <li>Docker containerization for local development</li>
                  <li>Dashboard customisation in EasyAdmin v4 with overrides and new feature integrations</li>
                  <li>Code refactoring using Large Language Models (LLMs)</li>
                  <li>Static analysis and code quality: implementation of PHPStan for passive testing and improvements</li>
                </ul>
              </div>
              <div className="task">
                <div className="tech-header">
                  <span className="tech-title">Prestashop </span><span className="icon-link"><a title="The project repo" href="https://github.com/Antsamotady"><BsGithub /></a></span>
                </div>
                <ul className="list-inline">
                  <li>Module development for Prestashop</li>
                  <li>Application upgrades from versions 1.5/1.7 to 8</li>
                  <li>Debugging and troubleshooting existing applications</li>
                  <li>Deployment and version control</li>
                </ul>
              </div>
              <div className="task">
                <div className="tech-header">
                  <span className="tech-title">Reactjs </span><span className="icon-link"><a title="The project repo" href="https://github.com/Antsamotady/ResumePortfolio/tree/master"><BsGithub /></a></span>
                </div>
                <ul className="list-inline">
                  <li>Responsive and mobile-friendly portfolio design</li>
                  <li>Component-based UI design</li>
                  <li>Interactive UI elements and dynamic content rendering</li>
                  <li><span className="mini-app-btn" onClick={this.hideMe}>Mini app</span></li>
                </ul>
              </div>
              <div className="mini-app">
                {this.state.shown
                  ? <div className="mini-app-container scale-up-ver-center">
                    <Counters
                      counters={this.state.counters}
                      totalCounters={this.totalCount()}
                      onAddItem={this.handleAddItem}
                      onReset={this.handleReset}
                      onIncrement={this.handleIncrement}
                      onDecrement={this.handleDecrement}
                      onDelete={this.handleDelete}
                    />
                  </div>
                  : null
                }
              </div>
              <div className="task">
                <div className="tech-header">
                  <span className="tech-title">Laravel </span><span className="icon-link"><a title="The project repo" href="https://github.com/Antsamotady/laravel6-test-dashdoard"><BsGithub /></a></span>
                </div>
                <ul className="list-inline">
                  <li>User login and authentication</li>
                  <li>Form validation with real-time feedback</li>
                  <li>Password reset functionality via email</li>
                  <li>Live search and dynamic filtering of data</li>
                  <li>Dashboard control and data visualization</li>
                  <li>Dynamic database updates with AJAX</li>
                  <li>Unit testing for core functionalities</li>
                </ul>
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
                  <li>Automated web page downloads with bash scripts</li>
                  <li>Cron jobs for scheduling tasks</li>
                  <li>Web page parsing and extracting structured data</li>
                  <li>Optimizing database tables and purging obsolete data</li>
                  <li>Data integrity checks and error correction</li>
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
                  <li>Installation and configuration of operating systems</li>
                  <li>Structured network cabling and setup</li>
                  <li>Firewall configuration and rule-based access control</li>
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
