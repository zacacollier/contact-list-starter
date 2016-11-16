import React, { Component } from 'react';
import List from './components/List.js'
import SearchBar from './components/SearchBar.js'

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            searchText: '',
            members: [
                {
                    _id: 'jerome',
                    name: 'Jerry Seinfeld',
                    occupation: 'Comedian',
                    avatar: 'https://pbs.twimg.com/profile_images/433319671430123521/LAm8cB1b.jpeg'
                },
                {
                    _id: 'elaine',
                    name: 'Elaine Benes',
                    occupation: 'Personal Assistant',
                    avatar: 'http://vignette2.wikia.nocookie.net/parody/images/5/57/Elaine.jpg/revision/latest?cb=20140720224240'
                },
                {
                    _id: 'george',
                    name: 'George Costanza',
                    occupation: 'Architect',
                    avatar: 'http://www.seinfeld-fan.net/pictures/george/george_costanza029.jpg'
                },
                {
                    _id: 'kramer',
                    name: 'Cosmo Kramer',
                    occupation: 'occupation unknown',
                    avatar: 'http://marcmyers.typepad.com/.a/6a00e008dca1f0883401a511539249970c-600wi' 
                }
            ]
 }
            }
    handleChange(event) {
        this.setState({
            ...this.state,
            searchText: event.target.value
        })
    }

    //TODO: import object assist for input scrubbing
    getFilteredList() {
        const term = this.state.searchText.trim().toLowerCase()
        const members = this.state.members

        if (!term) return members

        return members.filter(member => {
            return member.name.toLowerCase().search(term) >= 0
        })
    }

  render() {
    return (
      <div className="App">
            <SearchBar
                value={this.state.searchText}
        onChange={(event) => this.handleChange(event)}
            />
            <List members={this.getFilteredList()} />
      </div>
    );
  }
}

