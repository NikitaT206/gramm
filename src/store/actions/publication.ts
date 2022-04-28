import { Dispatch } from 'redux'
import { AppActionTypes, AppActions } from '../../types/app'

export function showEditProfile(state: boolean) {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch({type: AppActionTypes.SHOW_EDIT_PROFILE, payload: state})
  }
}