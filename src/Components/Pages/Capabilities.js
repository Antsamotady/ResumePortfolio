import React, { Component } from 'react';
import { LanguageContext } from '../../LanguageContext';

import { BsGithub } from 'react-icons/bs';
import { ImStackoverflow } from 'react-icons/im';
import { FaSearch } from 'react-icons/fa';

import "../../Stylesheets/capabilities.css";
import "../../Stylesheets/miniapp.css";
import "../../Stylesheets/page/search-input.css";

import Counters from '../Counters';

class Capabilities extends Component {
  static contextType = LanguageContext;

  state = {
    shown: false,
    counters: [{ id: 0, value: 0 }],
    searchQuery: "" // Add state to track the search query
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

  handleSearchChange = (e) => {
    this.setState({ searchQuery: e.target.value.toLowerCase() });
  }

  clearInput = () => {
    this.setState({ searchQuery: "" }); // Clear the input field when clicked
  };

  render() {
    const { t } = this.context;
    const { searchQuery } = this.state;
    console.log(this.state.searchQuery);

    // Function to filter the list items based on the search query
    const filterItems = (items) => {
      return items.filter(item => t(item).toLowerCase().includes(searchQuery));
    }

    return (
      <div className="app-container">
        <div className="capabilities-container">

          {/* Search Input */}
          <div className="form__group field">
            <input
              id="search"
              type="input"
              className="form__field"
              placeholder={t('searchPlaceholder')}
              onChange={this.handleSearchChange}
              value={searchQuery}
              required
            />
            <label htmlFor="search" className="form__label">
              <FaSearch className="icon" />
            </label>
            {searchQuery && (
              <span
                className="clear-input-icon"
                onClick={this.clearInput}
              >
                &#10006;
              </span>
            )}
          </div>

          <div className="job-position">
            <h2>{t('jobPositionItem1')}</h2>
            <div className="tasks">
              <div className="task">
                <div className="tech-header">
                  <span className="tech-title">Symfony </span><span className="icon-link"><a title="The project repo" href="https://github.com/Antsamotady/"></a></span>
                </div>
                <ul className="list-inline">
                  {filterItems(['capSymfonyItem1', 'capSymfonyItem2', 'capSymfonyItem3', 'capSymfonyItem4', 'capSymfonyItem5', 'capSymfonyItem6', 'capSymfonyItem7', 'capSymfonyItem8', 'capSymfonyItem9', 'capSymfonyItem10', 'capSymfonyItem11', 'capSymfonyItem12', 'capSymfonyItem13', 'capSymfonyItem14', 'capSymfonyItem15', 'capSymfonyItem16']).map((itemKey) => (
                    <li key={itemKey}>{t(itemKey)}</li>
                  ))}
                </ul>
              </div>
              <div className="task">
                <div className="tech-header">
                  <span className="tech-title">Prestashop </span><span className="icon-link"><a title="The project repo" href="https://github.com/Antsamotady"><BsGithub /></a></span>
                </div>
                <ul className="list-inline">
                  {filterItems(['capPrestashopItem1', 'capPrestashopItem2', 'capPrestashopItem3', 'capPrestashopItem4']).map((itemKey) => (
                    <li key={itemKey}>{t(itemKey)}</li>
                  ))}
                </ul>
              </div>
              <div className="task">
                <div className="tech-header">
                  <span className="tech-title">Reactjs </span><span className="icon-link"><a title="The project repo" href="https://github.com/Antsamotady/ResumePortfolio/tree/master"><BsGithub /></a></span>
                </div>
                <ul className="list-inline">
                  {filterItems(['capReactjsItem1', 'capReactjsItem2', 'capReactjsItem3']).map((itemKey) => (
                    <li key={itemKey}>{t(itemKey)}</li>
                  ))}
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
                  {filterItems(['capLaravelItem1', 'capLaravelItem2', 'capLaravelItem3', 'capLaravelItem4', 'capLaravelItem5', 'capLaravelItem6', 'capLaravelItem7']).map((itemKey) => (
                    <li key={itemKey}>{t(itemKey)}</li>
                  ))}
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
                  {filterItems(['capBashItem1', 'capBashItem2', 'capBashItem3', 'capBashItem4', 'capBashItem5']).map((itemKey) => (
                    <li key={itemKey}>{t(itemKey)}</li>
                  ))}
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
                  {filterItems(['capNetworkItem1', 'capNetworkItem2', 'capNetworkItem3']).map((itemKey) => (
                    <li key={itemKey}>{t(itemKey)}</li>
                  ))}
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
