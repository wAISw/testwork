import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as styles from './styles.scss'
import Filter from '../../components/Filter'
import List from '../../components/List'

export class ListContainer extends Component {
  render() {
    const {errors} = this.props;

    return <div className={styles.listContainer}>
      <div className='row-fluid'>
        <div className='col-sm-12 col-md-4 '>
          <Filter/>
        </div>
        <div className='col-sm-12 col-md-8 '>
          <List />
        </div>
        {
          errors.length > 0
            ? <div className='col-xs-12'>
            <div className={styles.errorList}>
              Что то пошло не так!
            </div>
          </div>
            : null
        }
      </div>
    </div>
  }
}
function mapStateToProps(state) {
  return {
    errors: state.list.errors
  }
}


export default connect(mapStateToProps, {})(ListContainer)