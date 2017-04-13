import React, {Component} from 'react'
import * as styles  from './styles.scss'
import logo  from './images/company-logo.png'
import plane  from './images/plane.gif'
import {getNoun} from '../../helpers/getNoun'

export default class ListItem extends Component {
  render() {
    const {
        price,
        arrival_date,
        arrival_time,
        carrier,
        departure_date,
        departure_time,
        destination,
        destination_name,
        origin,
        origin_name,
        stops
    } = this.props;

    return (
        <div className={styles.listItem}>
          <div className='rightBlock'>
            <img src={logo} className='logo'/>
            <button className='buyButton'>Купить<br />за&nbsp;{price}</button>
          </div>
          <div className='leftBlock'>
            <div className='from'>
              <span>{departure_time}</span>
              <span>{origin},&nbsp;{origin_name}</span>
              <span>{departure_date}</span>
            </div>
            <div className='stops'>
              {`${!stops ? 'Без' : stops} ${getNoun(stops, 'пересадка', 'пересадки', 'пересадок')}`}
              <img className='plane' src={plane}/>
            </div>
            <div className='to'>
              <span>{arrival_time}</span>
              <span>{destination},&nbsp;{destination_name}</span>
              <span>{arrival_date}</span>
            </div>
          </div>
        </div>
    )
  }
}