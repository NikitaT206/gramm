import {Publication, PublicationActions, PublicationActionTypes} from '../../types/publication'

const defaultPublicationState: Publication = {
  image: '',
  likes: [],
  description: '',
  date: new Date(),
  comments: [],
  owner: null,
  id: null
}

export const publicationReducer = (state = defaultPublicationState, action: PublicationActions): Publication => {
  switch(action.type) {
    case PublicationActionTypes.SET_LIKE:
      return {...state, likes: [...state.likes, action.payload]}
    // case PublicationActionTypes.DELETE_LIKE:
    //   return {...state, likes: state.likes.filter(user => user.id !== action.payload.id)}
    case PublicationActionTypes.SET_COMMENT:
      return {...state, comments: [...state.comments, action.payload]}
    // case PublicationActionTypes.DELETE_COMMENT:
    //   return {...state, comments: state.comments.filter(comment => comment.id !== action.payload.id)}
    default:
      return state
  }
}