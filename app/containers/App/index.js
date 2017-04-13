import React, {Component} from 'react'
import Header from '../../components/Header'
import ListContainer from '../ListContainer'

import * as styles from './styles.scss'

export default class App extends Component {

  render() {
    return (
        <div className={styles.app}>
          <Header/>
          <ListContainer />
        </div>
    )
  }
}
