/*eslint-disable*/
import * as types from '../constants/List'
import {FETCH_LIST_TO_FILTER_SUCCESS} from '../constants/Filter'
import axios from 'axios';

function requestData() {
  return {type: types.FETCH_LIST_START}
}

function receiveData(json) {
  return {
    type: types.FETCH_LIST_SUCCESS,
    data: json
  }
}

function receiveDataToFilter(json) {
  return {
    type: FETCH_LIST_TO_FILTER_SUCCESS,
    data: json
  }
}

function receiveError(json) {
  return {
    type: types.FETCH_LIST_FAIL,
    data: json
  }
}

export function fetchList() {
  return (dispatch) => {
    dispatch(requestData());
    return axios.get('http://localhost:3001/tickets', {})
      .then(function (response) {
        dispatch(receiveDataToFilter(response.data));
        dispatch(receiveData(response.data));
      })
      .catch(function (error) {
        dispatch(receiveError(error));
      })
  }
}


/*eslint-enable*/