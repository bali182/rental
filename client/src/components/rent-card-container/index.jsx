import React, { Component } from 'react'
import './rent-card-container.scss';

export default class RentCardContainer extends Component {
  render() {
    return <div className="rent-card-container">{this.props.children}</div>
  }
}