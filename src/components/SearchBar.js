import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
                <input
            className="search-bar"
            type="text"
            value={this.state.value}
            onChange={(event) => this.props.handleChange(event)}
            />
        )
    }
}
