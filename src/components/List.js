import React, { Component }  from 'react'
import Contact from './Contact.js'

export default class List extends Component {
    render() {
        const { members } = this.props
        return (
                <ul className="contact-list">
                {
                    members.map(member => {
                        return (
                                <Contact
                                    key={member._id}
                                    id={member._id}
                                    name={member.name}
                                    occupation={member.occupation}
                                    avatar={member.avatar}
                                    onDelete={this.props.onDelete.bind(this)}
                                />
                            )
                        }
                    )
                }
                </ul>
        )
    }
}
