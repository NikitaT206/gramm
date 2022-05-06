import { Dispatch } from 'redux'
import { Publication } from '../../types/publication'
import { UserActionTypes, UserActions, User } from '../../types/user'

export function setLoggedIn(state: boolean) {
  return (dispatch: Dispatch<UserActions>) => {
    dispatch({type: UserActionTypes.SET_LOGGED_IN, payload: state})
  }
}

export function setUserInfo(data: User) {
  return (dispatch: Dispatch<UserActions>) => {
    dispatch({type: UserActionTypes.SET_USER_INFO, payload: data})
  }
}

export function editProfile(data: {name: string, avatar: any, biography: string, login: string, website: string}) {
  return (dispatch: Dispatch<UserActions>) => {
    dispatch({type: UserActionTypes.CHANGE_PROFILE, payload: data})
  }
}

export function addPublication(data: Publication) {
  return (dispatch: Dispatch<UserActions>) => {
    dispatch({type: UserActionTypes.ADD_PUBLICATION, payload: data})
  }
}