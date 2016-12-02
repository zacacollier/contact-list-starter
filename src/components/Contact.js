import  React, { PropTypes } from 'react'
import { Link } from 'react-router'
const Contact = (props) => {
    return (

        <Link to={`/profile/${props.id}`} className="profile">
            <li id={props.id} className="contact">
                <div className="image-cropper">
                    <img src={props.avatar} alt="avatar"/>
                </div>
                <div className="contact-info">
                    <h2>{props.name}</h2>
                    <h3>{props.occupation}</h3>
                    <form >
                        <input type="submit" value={`Delete ${props.name}`}/>
                    </form>
                </div>
            </li>
        </Link>
    )
}
Contact.propTypes = {
        id: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        occupation: PropTypes.string.isRequired
}
export default Contact
