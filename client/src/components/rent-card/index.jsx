import React, { Component } from 'react';
import Icon, {TAG, MAP_MARKER} from '../icon';
import './rent-card.scss';

export default class RentCard extends Component {
  render() {
    const style = {
      backgroundImage: 'url(http://appartments-world.info/img/248/london-flat-8922.jpg)'
    }

    return <div className="rent-card">
      <div className="image" style={style}>
        <div className="overlay"></div>
      </div>
      <div className="top-attachment">
        <span className="left"><h1><Icon icon={MAP_MARKER}/> Dublin 1, XY Street</h1></span>
      </div>
      <div className="bottom-attachment">
        <span className="right"><Icon icon={TAG}/> $1000 monthly</span>
      </div>
    </div>
  }
}