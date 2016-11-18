import React, { Component } from 'react'

export default class NewContactForm extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            occupation: '',
            avatar: ''
        }
    }
}
