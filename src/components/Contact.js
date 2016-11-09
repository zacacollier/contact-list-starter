import React, { Component } from 'react'
import List from './List.js'

export default class Contact extends Component {
    render() {
        return (
                <li className="contact">
                    <div className="image-cropper">
                        <img src={this.props.avatar} alt="avatar"/>
                    </div>
                    <div className="contact-info">
                        <h2>{this.props.name}</h2>
                        <h3>{this.props.occupation}</h3>
                    </div>
                </li>
        )
    }
}
