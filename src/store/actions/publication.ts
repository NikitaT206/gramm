import { Dispatch } from 'redux'
import { PublicationActions, PublicationActionTypes } from '../../types/publication'
import { User } from '../../types/user'

export function setLike(state: User) {
  return (dispatch: Dispatch<PublicationActions>) => {
    dispatch({type: PublicationActionTypes.SET_LIKE, payload: state})
  }
}

export function deleteLike(state: User) {
  return (dispatch: Dispatch<PublicationActions>) => {
    dispatch({type: PublicationActionTypes.DELETE_LIKE, payload: state})
  }
}