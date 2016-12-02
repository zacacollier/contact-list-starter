import  React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
export default class Contact extends Component {
    handleClick(event) {
        event.preventDefault()
        const { id } = this.props
        console.log(id)
        // this.props.handleDelete(member.id)
    }
    render() {
        return (
            <li id={this.props.id} className="contact">
                <Link to={`/profile/${this.props.id}`} className="profile">
                    <div className="image-cropper">
                <img src={this.props.avatar} alt="avatar"/>
                    </div>
                </Link>
                <div className="contact-info">
                <h2>{this.props.name}</h2>
                <h3>{this.props.occupation}</h3>
                <form onClick={this.handleClick.bind(this)}>
                    <input type="submit" value={`Delete ${this.props.name}`} />
                </form>
                </div>
            </li>
        )
    }
}

Contact.propTypes = {
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    occupation: PropTypes.string.isRequired
}
