import { User, UserActions, UserActionTypes } from '../../types/user'

const defaultUserState: User = {
  publications: [],
  name: '',
  avatar: '',
  biography: '',
  login: '',
  subscribers: [],
  subscriptions: [],
  messages: [],
  status: '',
  email: '',
  website: '',
  id: 1
}

export const userReducer = (state = defaultUserState, action: UserActions): User => {
  switch(action.type) {
    // case UserActionTypes.SET_LIKE:
    //   return {...state, publications: [action.payload, ...state.publications]}
    case UserActionTypes.ADD_PUBLICATION:
      return {...state, publications: [action.payload, ...state.publications]}
    case UserActionTypes.CHANGE_EMAIL:
      return {...state, email: action.payload}
    case UserActionTypes.CHANGE_PROFILE:
      return {...state, name: action.payload.name, avatar: action.payload.avatar, biography: action.payload.biography, login: action.payload.login, website: action.payload.website }
    default: 
      return state
  }
}