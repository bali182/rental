import React, { Component } from 'react'
import { Link, IndexLink } from 'react-router'

export class Menu extends Component {
  render() {
    return <div>
      <IndexLink to="/" >Home</IndexLink>
      <Link to="/about">About</Link>
      {this.props.children}
    </div>
  }
}
