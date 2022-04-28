import { AppActions, App, AppActionTypes } from '../../types/app'

const defaultAppState = {
  showEditProfile: false,
  showAddPublicationForm: false
}

export const appReducer = (state = defaultAppState, action: AppActions): App => {
  switch(action.type) {
    case AppActionTypes.SHOW_EDIT_PROFILE:
      return {...state, showEditProfile: action.payload}
    case AppActionTypes.SHOW_ADD_PUBLICATION_FORM:
      return {...state, showAddPublicationForm: action.payload}
    default:
      return state
  }
}