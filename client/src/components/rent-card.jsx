import React, { Component, PropTypes } from 'react'
import {Rent} from '../model/rent'
import {toSymbol} from '../utils/currency-utils'
import {toIntervalCost, toInterval} from '../utils/time-utils'
import {abbreviate} from '../utils/text-utils'

export class RentCard extends Component {
  render() {
    const {address, rooms, baths, image, price, description} = this.props.rent;
    const {currency = 'eur', cost = 0, interval = 'month'} = price;

    const priceText = `${toSymbol(currency)}${Math.round(toIntervalCost(cost, interval, 'month'))} monthly`;
    const paidText = interval !== 'month' ? `(${toSymbol(currency)}${cost} ${toInterval(interval)})` : '';
    const roomsText = `${rooms} beds`;

    return <div className="ui card">
      <div className="content">
        <a className="left floated header">
          {abbreviate(address, 25)}
        </a>
        <a className="right floated like">
          <i className="heart icon"></i>
        </a>
      </div>
      
      <div className="image">
        <img src={image} />
      </div>

      <div className="content">
        <div>
          <i className="bed icon"></i>
          <span>{ roomsText }</span>
        </div>

        <div className="description">
          {description}
        </div>
      </div>
      <div className="extra content" style={{color:'#000'}}>
        <i className="tag icon"></i>
        <span>{ priceText }</span>
        <span className="meta"> { paidText }</span>
      </div>
    </div>
  }
}

RentCard.propTypes = {
  rent: PropTypes.instanceOf(Rent)
}