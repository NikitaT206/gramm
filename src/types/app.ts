export interface App {
  showEditProfile: boolean,
  showAddPublicationForm: boolean,
}

export enum AppActionTypes {
  SHOW_EDIT_PROFILE =  'SHOW_EDIT_PROFILE',
  SHOW_ADD_PUBLICATION_FORM = 'SHOW_ADD_PUBLICATION_FORM'
}

interface AppShowEditProfileAction {
  type: AppActionTypes.SHOW_EDIT_PROFILE,
  payload: boolean
}

interface AppShowAddPublicationFormAction {
  type: AppActionTypes.SHOW_ADD_PUBLICATION_FORM,
  payload: boolean
}

export type AppActions = AppShowEditProfileAction | AppShowAddPublicationFormAction