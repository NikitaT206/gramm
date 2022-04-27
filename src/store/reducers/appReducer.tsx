import { AppShowEditProfileAction, App, AppActionTypes } from '../../types/app'

const defaultAppState = {
  showEditProfile: false
}

export const appReducer = (state = defaultAppState, action: AppShowEditProfileAction): App => {
  switch(action.type) {
    case AppActionTypes.SHOW_EDIT_PROFILE:
      return {showEditProfile: action.payload}
    default:
      return state
  }
}