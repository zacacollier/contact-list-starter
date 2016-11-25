import React, { Component, PropTypes } from 'react'

export default class AddNewMember extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            name: '',
            occupation: '',
            avatar: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }
    handleSubmit(event) {
        event.preventDefault()
        console.log(this.state.value)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Add a 
                    <textarea className="search-bar" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input
                className="search-bar"
                type="submit"
                value={this.state.value}
                onSubmit={(event) => this.onSubmit(event)}
                />
            </form>
        )
    }
}

AddNewMember.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

