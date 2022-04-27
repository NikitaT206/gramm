import { Dispatch } from 'redux'
import { AppActionTypes, AppShowEditProfileAction } from '../../types/app'

export function showEditProfile(state: boolean) {
  return (dispatch: Dispatch<AppShowEditProfileAction>) => {
    dispatch({type: AppActionTypes.SHOW_EDIT_PROFILE, payload: state})
  }
}