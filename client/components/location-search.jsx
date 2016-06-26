import React, { Component, PropTypes } from 'react';
import {geocode} from '../utils/location-utils'
import classNames from 'classnames';
import $ from 'jquery';
import searchPlugin from 'semantic-ui-search';
import apiPlugin from 'semantic-ui-api';
import keys from '../../api-codes.json';

import 'jquery-ui/effect';

$.fn.search = searchPlugin;
$.fn.api = apiPlugin;

export class LocationSearch extends Component {
  render() {
    const classes = classNames("ui search fluid", this.props.className);
    const placeholder = this.props.placeholder || '';

    return <div className={classes} ref="_search">
      <div className="ui big fluid icon input">
        <input className="prompt" type="text" placeholder="Places..." />
        <i className="map marker icon"></i>
      </div>
      <div className="results"></div>
    </div>
  }

  componentDidMount() {
    $(this.refs._search).api({
      responseAsync(settings, callback) {
        const query = settings.urlData.query;
        if (!query || query.length === 0) {
          callback({ results: [] });
        } else {
          geocode({ input: query }).then(places => {
            callback({
              results: places.map(place => ({ title: place.description }))
            });
          });
        }
      }
    }).search({
      searchDelay: 200,
      transition: 'drop',
    });
  }

  componentWillUnmount() {
    $(this.refs._search).search('destroy');
  }
}
