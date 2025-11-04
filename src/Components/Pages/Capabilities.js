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
            <h2>{t('jobPositionItem1')}</h2>
            <div className="tasks">
              <div className="task">
                <div className="tech-header">
                  <span className="tech-title">Symfony </span><span className="icon-link"><a title="The project repo" href="https://github.com/Antsamotady/"></a></span>
                </div>
                <ul className="list-inline">
                  <li>{t('capSymfonyItem1')}</li>
                  <li>{t('capSymfonyItem2')}</li>
                  <li>{t('capSymfonyItem3')}</li>
                  <li>{t('capSymfonyItem4')}</li>
                  <li>{t('capSymfonyItem5')}</li>
                  <li>{t('capSymfonyItem6')}</li>
                  <li>{t('capSymfonyItem7')}</li>
                  <li>{t('capSymfonyItem8')}</li>
                  <li>{t('capSymfonyItem9')}</li>
                  <li>{t('capSymfonyItem10')}</li>
                  <li>{t('capSymfonyItem11')}</li>
                  <li>{t('capSymfonyItem12')}</li>
                  <li>{t('capSymfonyItem13')}</li>
                  <li>{t('capSymfonyItem14')}</li>
                  <li>{t('capSymfonyItem15')}</li>
                  <li>{t('capSymfonyItem16')}</li>
                </ul>
              </div>
              <div className="task">
                <div className="tech-header">
                  <span className="tech-title">Prestashop </span><span className="icon-link"><a title="The project repo" href="https://github.com/Antsamotady"><BsGithub /></a></span>
                </div>
                <ul className="list-inline">
                  <li>{t('capPrestashopItem1')}</li>
                  <li>{t('capPrestashopItem2')}</li>
                  <li>{t('capPrestashopItem3')}</li>
                  <li>{t('capPrestashopItem4')}</li>
                </ul>
              </div>
              <div className="task">
                <div className="tech-header">
                  <span className="tech-title">Reactjs </span><span className="icon-link"><a title="The project repo" href="https://github.com/Antsamotady/ResumePortfolio/tree/master"><BsGithub /></a></span>
                </div>
                <ul className="list-inline">
                  <li>{t('capReactjsItem1')}</li>
                  <li>{t('capReactjsItem2')}</li>
                  <li>{t('capReactjsItem3')}</li>
                  <li><span className="mini-app-btn" onClick={this.hideMe}>{t('capReactjsItem4')}</span></li>
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
                  <li>{t('capLaravelItem1')}</li>
                  <li>{t('capLaravelItem2')}</li>
                  <li>{t('capLaravelItem3')}</li>
                  <li>{t('capLaravelItem4')}</li>
                  <li>{t('capLaravelItem5')}</li>
                  <li>{t('capLaravelItem6')}</li>
                  <li>{t('capLaravelItem7')}</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="job-position">
            <h2>{t('jobPositionItem2')}</h2>
            <div className="tasks">
              <div className="task">
                <div className="tech-header">
                  <span className="tech-title">Bash Scripting </span><span className="icon-link"><a title="My stack profile" href="https://stackoverflow.com/users/9532910/antsamotady"><ImStackoverflow /></a></span>
                </div>
                <ul className="list-inline">
                  <li>{t('capBashItem1')}</li>
                  <li>{t('capBashItem2')}</li>
                  <li>{t('capBashItem3')}</li>
                  <li>{t('capBashItem4')}</li>
                  <li>{t('capBashItem5')}</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="job-position">
            <h2>{t('jobPositionItem3')}</h2>
            <div className="tasks">
              <div className="task">
                <div className="tech-header">
                  <span className="tech-title">System & Network Engineering </span><span className="icon-link"><a title="the repo" href="https://github.com/Antsamotady/"></a></span>
                </div>
                <ul className="list-inline">
                  <li>{t('capNetworkItem1')}</li>
                  <li>{t('capNetworkItem2')}</li>
                  <li>{t('capNetworkItem3')}</li>
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
