import React, { Component } from 'react';
import './App.css';
import CardList from './CardList'
import SearchBox from './SearchBox'
import {robots} from './robots'

class App extends Component {
  constructor() {
    super()
    this.state = {
      'robots': robots,
      'searchField': ''
    }
  }

  onSearchChange = (event) => {
    this.setState({'searchField':event.target.value})
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
    this.setState({'robots': filteredRobots})
  }

  render() {
    return (
      <div className="tc">
        <h1>Robofriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={this.state.robots} />
      </div>
    );
  }
}

export default App;
