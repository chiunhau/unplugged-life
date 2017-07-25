const fetchReducer = (state = {}, action) => {
  switch (action.type) {
    case 'REQUEST_DATA':
      return {...state, [action.config.id]: {isFetching: true}}
    case 'RECEIVE_DATA':
      return {...state, [action.config.id]: {isFetching: false, ...action.data}}
    default:
      return state
  }
}

export default fetchReducer
