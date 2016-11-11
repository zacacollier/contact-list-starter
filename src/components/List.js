import React, { Component } from 'react'
import Contact from './Contact.js'

export default class List extends Component {
    render() {
        return (
                <ul className="contact-list">
                {
                    this.props.members.map(member => {
                        return (
                                <Contact
                                    key={member._id}
                                    name={member.name}
                                    occupation={member.occupation}
                                    avatar={member.avatar}
                                />
                            )
                        }
                    )
                }
                </ul>
        )
    }
}
