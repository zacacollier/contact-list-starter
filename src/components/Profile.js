import React, { Component } from 'react'
import axios from 'axios'

export default class Profile extends Component {
    constructor() {
        super()
        this.state = {
            member: null
        }
    }


componentDidMount() {
    axios.get(`/api/contacts/${this.props.params.id}`)
         .then(resp => {
             this.setState({
                 member: resp.data
             })
         })
    .catch(err => console.log(`Axios Error: ${err}`))
}

renderProfile() {
    return (
        <div className="profile">
            <div className="image-cropper">
                <img src={this.state.member.avatar} role="presentation"/>
            </div>
            <div className="contact-info">
                <h2>{this.state.member.name}</h2>
                <span></span>
            </div>
        </div>
    )
    }
    render() {
        if (!this.state.member) {
            return <h2>Loading...</h2>
        }
        return this.renderProfile()
    }
}
