import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Profile from './components/Profile.js'
import './index.css'
import { BrowserRouter, Match, Miss } from 'react-router'

const Router = () => {
    return (
        <BrowserRouter>
            <div>
                <Match exactly pattern="/" component={App} />
                <Match pattern="/profile/:id" component={Profile} />
                <Miss render={() => <h2>Not Found...</h2>}  />
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(
    <Router />,
  document.getElementById('root')
)
