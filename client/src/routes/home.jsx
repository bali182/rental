import React, { Component } from 'react'
import RentCardContainer from '../components/rent-card-container';
import RentCard from '../components/rent-card';

export class Home extends Component {
  render() {
    return <div>
      <RentCardContainer>
        <RentCard />
        <RentCard />
        <RentCard />
        <RentCard />
        <RentCard />
      </RentCardContainer>
    </div>
  }
}