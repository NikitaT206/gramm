export interface User {
  publications: any[],
  name: string,
  avatar: string,
  biography: string,
  login: string,
  subscribers: any[],
  subscriptions: any[],
  messages: any[],
  status: string,
  email: string,
  website: string,
}

export enum UserActionTypes {
  ADD_PUBLICATION = 'ADD_PUBLICATION',
  CHANGE_PROFILE = 'CHANGE_PROFILE',
  CHANGE_EMAIL = 'CHANGE_EMAIL',
}

interface UserAddPublicationAction {
  type: UserActionTypes.ADD_PUBLICATION,
  payload: any
}

interface UserChangeProfileAction {
  type: UserActionTypes.CHANGE_PROFILE,
  payload: any
  // {name: string, avatar: string, biography: string, login: string, website: string}
}

interface UserChangeEmailAction {
  type: UserActionTypes.CHANGE_EMAIL,
  payload: string
}

export type UserActions = UserAddPublicationAction | UserChangeProfileAction | UserChangeEmailAction