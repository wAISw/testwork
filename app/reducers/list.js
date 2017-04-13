import  * as types from '../constants/List'

const initialState = {
  tickets: [],
  errors: []
};

export default function filterReducer(state = initialState, action) {

  switch (action.type) {

    case types.FETCH_LIST_START:
      return {...state};

    case types.FETCH_LIST_SUCCESS:
      return {...state, tickets: action.data};

    case types.FETCH_LIST_FAIL:
      let errors = [action.data];
      return {...state, errors: errors};
    default:
      return state
  }
}