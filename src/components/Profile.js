import React, { Component } from 'react'
import axios from 'axios'

export default class Profile extends Component {
    constructor() {
        super()
        this.state = {
            contact: null
        }
    }
}

componentDidMount() {
    axios.get(`http://www.localhost.com:3000/api/contacts/{$this.props.params.id}`)
         .then(resp => {
             this.setState({
                 contact: resp.data
             })
         })
    .catch(err => console.log(`Axios Error: ${err}`))
}

renderProfile() {
    return (
        <div className="profile">
            <div className="image-cropper">
                <img src={this.state.members.avatar} alt="Image Not Available"/>
            </div>
            <div className="contact-info">
                <h2>Name: {this.state..name}</h2>
                <span></span>
            </div>
        </div>
    )
    render() {
        if (!this.state.contact) {
            return <h2>Loading...</h2>
        }
        return this.renderProfile()
    }
}
