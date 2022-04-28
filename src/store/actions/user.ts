import { Dispatch } from 'redux'
import { Publication } from '../../types/publication'
import { UserActionTypes, UserActions } from '../../types/user'

export function changeProfile(data: {name: string, avatar: any, biography: string, login: string, website: string}) {
  return (dispatch: Dispatch<UserActions>) => {
    dispatch({type: UserActionTypes.CHANGE_PROFILE, payload: data})
  }
}

export function addPublication(data: Publication) {
  return (dispatch: Dispatch<UserActions>) => {
    dispatch({type: UserActionTypes.ADD_PUBLICATION, payload: data})
  }
}