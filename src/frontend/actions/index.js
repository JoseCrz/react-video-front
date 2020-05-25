import axios from 'axios'

export const setFavorite = payload => {
  return {
    type: 'SET_FAVORITE',
    payload
  }
}

export const deleteFavorite = payload => {
  return {
    type: 'DELETE_FAVORITE',
    payload
  }
}

export const loginRequest = payload => {
  return {
    type: 'LOGIN_REQUEST',
    payload
  }
}

export const logoutRequest = payload => {
  return {
    type: 'LOGOUT_REQUEST',
    payload
  }
}

export const registerRequest = payload => {
  return {
    type: 'REGISTER_REQUEST',
    payload
  }
}

export const getVideoSource = payload => {
  return {
    type: 'GET_VIDEO_SOURCE',
    payload
  }
}

export const filterRequest = payload => {
  return {
    type: 'FILTER_REQUEST',
    payload
  }
}

export const setError = payload => {
  return {
    type: 'SET_ERROR',
    payload
  }
}

export const registerUser = (payload, redirectUrl) => {
  return dispatch => {
    axios.post('/auth/sign-up', payload)
    .then( ({ data }) => {
      dispatch(registerRequest(data))
    })
    .then( () => {
      window.location.href = redirectUrl
    })
    .catch( error => {
      dispatch(setError(error))
    })
  }
}