import { Dispatch } from 'redux'
import { AppActionTypes, AppActions } from '../../types/app'

export function showEditProfile(state: boolean) {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch({type: AppActionTypes.SHOW_EDIT_PROFILE, payload: state})
  }
}

export function showAddPublicationForm(state: boolean) {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch({type: AppActionTypes.SHOW_ADD_PUBLICATION_FORM, payload: state})
  }
}