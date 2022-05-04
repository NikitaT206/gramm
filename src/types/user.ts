import { Publication } from './publication'

export interface User {
  publications: Publication[],
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
  id: number
}

export enum UserActionTypes {
  ADD_PUBLICATION = 'ADD_PUBLICATION',
  CHANGE_PROFILE = 'CHANGE_PROFILE',
  CHANGE_EMAIL = 'CHANGE_EMAIL',
  SET_LIKE = 'SET_LIKE',
  DELETE_LIKE = 'DELETE_LIKE',
  SET_COMMENT = 'SET_COMMENT',
  DELETE_COMMENT = 'DELETE_COMMENT'
}

interface UserAddPublicationAction {
  type: UserActionTypes.ADD_PUBLICATION,
  payload: any
}

interface UserChangeProfileAction {
  type: UserActionTypes.CHANGE_PROFILE,
  payload: {name: string, avatar: string, biography: string, login: string, website: string}
}

interface UserChangeEmailAction {
  type: UserActionTypes.CHANGE_EMAIL,
  payload: string
}

interface UserSetLikeAction {
  type: UserActionTypes.SET_LIKE
}

interface UserDeleteLikeAction {
  type: UserActionTypes.DELETE_LIKE
}

interface UserSetCommentAction {
  type: UserActionTypes.SET_COMMENT,
  payload: string
}

interface UserDeleteCommentAction {
  type: UserActionTypes.DELETE_COMMENT,
  payload: string
}

export type UserActions = UserAddPublicationAction | UserChangeProfileAction | UserChangeEmailAction | UserSetLikeAction | UserDeleteLikeAction | UserSetCommentAction | UserDeleteCommentAction