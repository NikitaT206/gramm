import { User } from './user'

export interface Publication {
  image: string,
  likes: User[],
  description: string,
  date: Date,
  comments: string[],
  owner: User | null,
  id: number | null
}

export enum PublicationActionTypes {
  SET_COMMENT = 'ADD_COMMENT',
  DELETE_COMMENT = 'DELETE_COMMENT',
  SET_LIKE = 'SET_LIKE',
  DELETE_LIKE = 'DELETE_LIKE',
}

interface PublicationSetCommentAction {
  type: PublicationActionTypes.SET_COMMENT,
  payload: string,
}

interface PublicationDeleteCommentAction {
  type: PublicationActionTypes.DELETE_COMMENT,
  payload: number
}

interface PublicationSetLikeAction {
  type: PublicationActionTypes.SET_LIKE,
  payload: User,
}

interface PublicationDeleteLikeAction {
  type: PublicationActionTypes.DELETE_LIKE,
  payload: User
}

export type PublicationActions = PublicationSetCommentAction | PublicationDeleteCommentAction | PublicationSetLikeAction | PublicationDeleteLikeAction
