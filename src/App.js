import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';

import { setSearchField, requestRobots } from './actions';

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  };
};
const mapDispatchToPros = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  };
};
class App extends React.Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    // const { monsters: robots } = this.state;
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredMonsters = robots.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>monster</h1>
        <SearchBox
          handleChange={onSearchChange}
          placeholder="search monsters"
        ></SearchBox>
        {isPending ? (
          <h2>loading...</h2>
        ) : (
          <CardList monsters={filteredMonsters}></CardList>
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToPros)(App);
