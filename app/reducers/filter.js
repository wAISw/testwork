import  * as types from '../constants/Filter'
import {getNoun} from '../helpers/getNoun'

const initialState = {
  stops: {},
  filterParams: {}
};

export default function listReducer(state = initialState, action) {

  switch (action.type) {

    case types.FETCH_LIST_TO_FILTER_SUCCESS:
      let stopsObj = {};
      (action.data || []).map((item) => {
        stopsObj[item.stops] = {
          name: `${!item.stops ? 'Без' : item.stops} ${getNoun(item.stops, 'пересадка', 'пересадки', 'пересадок')}`,
          value: `${item.stops}`
        };
      });
      return {...state, stops: stopsObj};
    case types.SET_FILTER:

      return {...state, filterParams: action.data};

    default:
      return state
  }
}