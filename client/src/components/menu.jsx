import React, { Component } from 'react'
import { Link, IndexLink } from 'react-router'

export class Menu extends Component {
  render() {
    return <div>
      <div className="ui top fixed page grid menu">
        <a href="" className="brand item">Project Name</a>
        <IndexLink className="item" to="/" >Home</IndexLink>
        <Link className="item" to="/about">About</Link>
      </div>
      {this.props.children}
    </div>
  }
}
