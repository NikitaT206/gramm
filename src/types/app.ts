export interface App {
  showEditProfile: boolean,
}

export enum AppActionTypes {
  SHOW_EDIT_PROFILE =  'SHOW_EDIT_PROFILE'
}

export interface AppShowEditProfileAction {
  type: AppActionTypes.SHOW_EDIT_PROFILE,
  payload: boolean
}