import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Link to='/dashboard'>Dashboard</Link> <br></br>
                <Link to='/login'>Login Page</Link> <br></br>
                Placeholder home page
            </div>
        )
    }
}
