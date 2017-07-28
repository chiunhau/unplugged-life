const init = {

}

export default (state = init, action) => {
  switch (action.type) {
    case 'EXAMPLE_ACTION':
      return {...state}

    default:
      return state
  }
}
