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
 }
    handleChange(event) {
        this.setState({
            members: this.state.members,
            searchText: event.target.value
        })
    }

    componentDidMount() {
        axios.get('/api/contacts')
            .then(resp => {
                console.log(resp.data)
                this.setState({
                    searchText: this.state.searchText,
                    members: resp.data
                })
            })
            .catch(err => console.log(`${err}`))
    }

    handleAddMember(attributes) {
        axios.post('/api/contacts/', attributes)
             .then(resp => {
                 this.setState(prev => {
                     return {
                         ...prev,
                         members: [...prev.members, resp.data]
                         }
                 })
             })
               .catch(err => {
                   debugger
                   console.log(`POST error: ${err}`)
               })
    }

    handleDeleteMember(targetID) {
        const { members } = this.state
        const filteredMembers = members.filter(member => member ? !member._id.includes(targetID) : null)
        console.log(filteredMembers)
        axios.delete(`/api/contacts/${targetID}`)
                                       .then(resp => {
                                           this.setState(prev => {
                                               return {
                                                   ...prev,
                                                   members: filteredMembers
                                               }
                                           })
                                       })
                                       .catch(err => {console.log(`DELETE error: ${err}`)})
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
            <List members={this.getFilteredList()}
                  handleDelete={this.handleDeleteMember.bind(this)}
            />
      </div>
    );
  }
}
