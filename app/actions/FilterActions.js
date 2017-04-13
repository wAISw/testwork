/*eslint-disable*/
import * as types from '../constants/Filter'


export function setFilter(filterParams) {
  return (dispatch) => {
    dispatch({
      type: types.SET_FILTER,
      data: filterParams
    })
  }
}

/*eslint-enable*/