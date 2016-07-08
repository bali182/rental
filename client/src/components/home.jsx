import React, { Component } from 'react'
import { RentCard } from './rent-card';
import { SearchBox } from './search-box';
import { Rent } from '../model/rent';
import { shuffle, random, sample, range } from 'lodash';

function createRandomRent(id) {
  const cities = ['London', 'Dublin', 'New York', 'Budapest'];
  const countries = ['UK', 'Ireland', 'USA', 'Hungary'];
  const currencies = ['gbp', 'eur', 'usd'];
  const intervals = ['week', 'month'];
  const images = [
    'https://cache.carlsonhotels.com/ow-cms/pkp/images/hotels/GBLEEDS/CMSNEW/SuperiourRoom.jpg',
    'http://www.lqluxuryhomes.com/wp-content/uploads/2015/05/Family-room-design-ideas-and-photos.jpg',
    'http://4.bp.blogspot.com/-RSAdi3NMMs8/VakWj_znRcI/AAAAAAAAAMI/lp19iktRyCw/s1600/Rent%2Broom%2Bstockholm.jpg',
    'http://www.savoy-sharm.com/media-room/images/hi-res/king-bed-room-accommodation-savoy-luxury-5-stars-accommodation-sharm-el-sheikh.jpg',
    'http://cdn.home-designing.com/wp-content/uploads/2009/03/childrens-room-5.jpg',
  ]

  return new Rent({
    id,
    address: `${sample(cities)}, ${sample(countries)}`,
    rooms: random(1, 4, false),
    baths: random(1, 4, false),
    image: sample(images),
    price: {
      currency: sample(currencies),
      cost: random(500, 2000, false),
      interval: sample(intervals)
    }
  })
}

const rents = range(0, 20).map(createRandomRent)

export class Home extends Component {
  render() {
    let i = 0;
    const cards = rents.map(rent => <RentCard key={++i}/*{rent.id}*/ rent={rent}/>)
    return <div className="ui page grid"> 
      <SearchBox />
      <div className="ui three stackable cards">
        {cards}
      </div>
    </div>
  }
}