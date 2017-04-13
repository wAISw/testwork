import React, {Component} from 'react'
import * as styles from './styles.scss'
import {connect} from 'react-redux'
import ListItem from '../ListItem'
import {fetchList} from '../../actions/ListActions';
import {getKey} from '../../helpers/utils'

export class List extends Component {
  componentDidMount() {
    this.props.fetchList();
  }

  filterTicket(ticket) {
    const {filterParams} = this.props;

    if (Object.keys(filterParams).length === 0 || getKey(filterParams, 'all', false) || getKey(filterParams, ticket.stops, false))
      return ticket;
  }

  renderList() {
    const {tickets} = this.props;
    let filtered = tickets.filter(ticket => this.filterTicket(ticket));
    return (<div>
      {filtered.length > 0 ?
          (filtered || []).map((line, key) => {
            return (<div key={key}>
              <ListItem {...line}/>
            </div>);
          })
          : null
      }

    </div>);
  }

  render() {
    return (
        <div>
          <div className={styles.list}>
            { this.renderList() }
          </div>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tickets: state.list.tickets,
    filterParams: state.filter.filterParams
  }
}


export default connect(mapStateToProps, {fetchList})(List)