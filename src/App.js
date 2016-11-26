import React, { Component } from 'react'
import axios from 'axios'

import List from './components/List.js'
import SearchBar from './components/SearchBar.js'
import AddNewMember from './components/AddNewMember.js'

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            searchText: '',
            members: []
        }
        /* members: [
         *       {
         *           _id: 'jerome',
         *           name: 'Jerry Seinfeld',
         *           occupation: 'Comedian',
         *           avatar: 'https://pbs.twimg.com/profile_images/433319671430123521/LAm8cB1b.jpeg'
         *       },
         *       {
         *           _id: 'elaine',
         *           name: 'Elaine Benes',
         *           occupation: 'Personal Assistant',
         *           avatar: 'http://vignette2.wikia.nocookie.net/parody/images/5/57/Elaine.jpg/revision/latest?cb=20140720224240'
         *       },
         *       {
         *           _id: 'george',
         *           name: 'George Costanza',
         *           occupation: 'Architect',
         *           avatar: 'http://www.seinfeld-fan.net/pictures/george/george_costanza029.jpg'
         *       },
         *       {
         *           _id: 'kramer',
         *           name: 'Cosmo Kramer',
         *           occupation: 'occupation unknown',
         *           avatar: 'http://marcmyers.typepad.com/.a/6a00e008dca1f0883401a511539249970c-600wi'
         *       }
         *   ]*/
 }
    handleChange(event) {
        this.setState({
            members: this.state.members,
            searchText: event.target.value
        })
    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/contacts')
            .then(resp => {
                this.setState({
                    searchText: this.state.searchText,
                    members: resp.data
                })
            })
            .catch(err => console.log(`ERROR: ${err}`))
    }

    handleAddMember(attributes) {
        console.log(attributes)
        axios.post('http://localhost:3001/api/contacts', {
        })
             .then(resp => {
                 console.log(resp)
                 this.setState({
                         members: resp.data.members
                 })
             })
             .catch(err => console.log(`ERROR: ${err}`))
    }

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
            <AddNewMember
                onAdd={this.handleAddMember.bind(this)}
                />
            <List members={this.getFilteredList()} />
      </div>
    );
  }
}
