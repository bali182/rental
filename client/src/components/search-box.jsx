import React, { Component, PropTypes } from 'react'
import {LocationSearch} from './location-search'
import {Rent} from '../model/rent'
import {toSymbol} from '../utils/currency-utils'
import {toIntervalCost, toInterval} from '../utils/time-utils'
import {abbreviate} from '../utils/text-utils'

export class SearchBox extends Component {
  render() {
    return <div className="one column row">
      <div className="column">
        <LocationSearch />
      </div>
      <div className="column">
      </div>
    </div>
  }
}