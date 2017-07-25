import axios from 'axios';

const requestData = (config) => {
  console.log('Requesting: ', config)
  return {
    type: 'REQUEST_DATA',
    config
  }
}

const receiveData = (config, response) => {
  console.log('Successed: ', config, ', with response: ', response)
  return {
    type: 'RECEIVE_DATA',
    data: response.data,
    config
  }
}

const shouldFetchData = (state, config) => {
  const thing = state.fetchedData[config.id];

  if (!thing) {
    return true
  }
  else if (thing.isFetching){
    console.log('Fetch request denied: during fetching process.');
    return false
  }
  else {
    console.log('Fetch request denied: data already exists.');
    return false
  }
}

export const fetchData = (config) => {
  return (dispatch, getState) => {
    if (shouldFetchData(getState(), config)) {
      dispatch(requestData(config))
      return axios.get(config.url)
        .then(response => dispatch(receiveData(config, response)))
    }
  }
}
