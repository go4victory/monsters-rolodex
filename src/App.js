import React from 'react';
import './App.css';
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';
class App extends React.Component {
  state = {
    monsters: [],
    searchField: ''
  };
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <React.Fragment>
        <SearchBox
          handleChange={e => this.setState({ searchField: e.target.value })}
          placeholder="search monsters"
        ></SearchBox>
        <div className="App">
          <CardList monsters={filteredMonsters}></CardList>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
