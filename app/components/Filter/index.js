import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {setFilter} from '../../actions/FilterActions'
import * as styles from './styles.scss'
import {connect} from 'react-redux'
import {Checkbox} from '../Checkbox'
import {getKey} from '../../helpers/utils'

export class Filter extends Component {
  setFilterHandler(value, only) {

    let oldFilterParams = this.props.filterParams;
    let {setFilter} =  this.props;
    let filterParams = {};

    if (!only) {
      filterParams = oldFilterParams ? Object.assign({}, oldFilterParams) : {};
    }
    if (filterParams[value])
      delete filterParams[value];
    else
      filterParams[value] = true;

    setFilter(filterParams);
  }

  renderList() {
    const {stops, filterParams, setFilter} = this.props;

    return (
      <div>
        <div className='line'>
          <Checkbox label='Все'
                    value='all'
                    isChecked={getKey(filterParams, 'all', false)}
                    handleCheckboxChange={this.setFilterHandler.bind(this)}/>
        </div>
        {Object.values(stops).map((line, key) => {
          return (
            <div className='line' key={key}>
              <Checkbox label={line.name}
                        value={line.value}
                        isChecked={getKey(filterParams, line.value, false)}
                        handleCheckboxChange={this.setFilterHandler.bind(this)}/>
            </div>
          );
        })}
      </div>
    );
  }

  render() {
    const {stops} = this.props;
    return (
      <div>
        {Object.keys(stops).length > 0
          ? <div className={styles.filter}>
            <h4>Количество пересадок</h4>
            { this.renderList() }
          </div>
          : null
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    stops: state.filter.stops,
    filterParams: state.filter.filterParams
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setFilter: bindActionCreators(setFilter, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)