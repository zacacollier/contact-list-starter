import React, { Component, PropTypes } from 'react'

export default class AddNewMember extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            occupation: '',
            avatar: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        const { name: attribute } = event.target
        this.setState({
            ...this.state,
            [attribute]: event.target.value
        })
        console.log(attribute)
        console.log(this.state)
    }
    handleSubmit(event) {
        event.preventDefault()
        const { name, occupation, avatar } = this.state
        this.props.onAdd({ name, occupation, avatar })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">
                        Name:
                    </label>
                    <input
                        name="name"
                        className="search-bar"
                        type="text"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="name">
                        Occupation:
                    </label>
                    <input
                        name="occupation"
                        className="search-bar"
                        type="text"
                        value={this.state.occupation}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="name">
                        Avatar:
                    </label>
                    <input
                        name="avatar"
                        className="search-bar"
                        type="text"
                        value={this.state.avatar}
                        onChange={this.handleChange}
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

