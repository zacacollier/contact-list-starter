import React, { Component } from 'react'
import Contact from './Contact.js'

export default class List extends Component {
    constructor() {
        super();

        this.state = {
            members: [
                {
                    _id: 'jerome',
                    name: 'Jerry Seinfeld',
                    occupation: 'Comedian',
                    avatar: 'https://pbs.twimg.com/profile_images/433319671430123521/LAm8cB1b.jpeg'
                },
                {
                    _id: 'elaine',
                    name: 'Elaine Benes',
                    occupation: 'Personal Assistant',
                    avatar: 'http://vignette2.wikia.nocookie.net/parody/images/5/57/Elaine.jpg/revision/latest?cb=20140720224240'
                },
                {
                    _id: 'george',
                    name: 'George Costanza',
                    occupation: 'Architect',
                    avatar: 'http://www.seinfeld-fan.net/pictures/george/george_costanza029.jpg'
                },
                {
                    _id: 'kramer',
                    name: 'Cosmo Kramer',
                    occupation: 'occupation unknown',
                    avatar: 'http://marcmyers.typepad.com/.a/6a00e008dca1f0883401a511539249970c-600wi' 
                },
            ]
        }
    }

    render() {
        return (
                <ul className="contact-list">
                {
                    this.state.members.map(member =>
                                    <Contact
                                            key={member._id}
                                            name={member.name}
                                            occupation={member.occupation}
                                            avatar={member.avatar}
                                        />)
                }
                </ul>
        )
    }
}
