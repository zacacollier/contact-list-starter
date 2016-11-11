import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
                <input
            className="search-bar"
            type="text"
            value={this.props.value}
            onChange={(event) => this.props.onChange(event)}
            />
        )
    }
}
 
