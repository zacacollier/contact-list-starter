import React from 'react'

const Contact = (props) => {
    return (
            <li id={props.id} className="contact">
                <div className="image-cropper">
                    <img src={props.avatar} alt="avatar"/>
                </div>
                <div className="contact-info">
                    <h2>{props.name}</h2>
                    <h3>{props.occupation}</h3>
                </div>
            </li>
    )
}

export default Contact
