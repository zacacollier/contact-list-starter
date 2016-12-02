import React  from 'react'
import Contact from './Contact.js'

const List = (props) => {
    return (
            <ul className="contact-list">
            {
                props.members.map(member => {
                    return (
                            <Contact
                                key={member._id}
                                id={member._id}
                                name={member.name}
                                occupation={member.occupation}
                                avatar={member.avatar}
                                onDelete={member.onDelete}
                            />
                        )
                    }
                )
            }
            </ul>
    )
}

export default List
