import React, {Component} from 'react'
import * as styles  from './styles.scss'
import logo  from './images/logo.png'

export default class Header extends Component {
  render() {
    return (
      <div className={styles.headerWrap}>
        <img src={logo}/>
      </div>
    )
  }
}