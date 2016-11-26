import React, { Component, PropTypes } from 'react'

export default class AddNewMember extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            occupation: '',
            avatar: ''
        }
    }
    handleChange(event) {
        const { name: attribute } = event.target
        this.setState({
            value: event.target.value,
            name: attribute.name,
            occupation: attribute.occupation,
            avatar: attribute.avatar
        })
    }
    handleSubmit(event) {
        event.preventDefault()
        const { name, occupation, avatar } = this.state
        this.props.onAdd({ name, occupation, avatar })
    }
    render() {
        return (
            <div>
                <form ={this.handleSubmit.bind(this)}>
                    <label htmlFor="name">
                        Name:
                    </label>
                    <input
                        className="search-bar"
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange.bind(this)}
                    />
                    <label htmlFor="name">
                        Occupation:
                    </label>
                    <input
                        className="search-bar"
                        type="text"
                        name="occupation"
                        value={this.state.occupation}
                        onChange={this.handleChange.bind(this)}
                    />
                    <label htmlFor="name">
                        Avatar:
                    </label>
                    <input
                        className="search-bar"
                        type="text"
                        name="avatar"
                        value={this.state.avatar}
                        onChange={this.handleChange.bind(this)}
                    />
                    <input
                        type="submit"
                        value="Add New Member"
                        disabled={!!this.state.name}
                    />
                </form>
            </div>
        )
    }
}

AddNewMember.propTypes = {
    onAdd: PropTypes.func.isRequired
}

