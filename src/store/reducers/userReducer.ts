import { User, UserActions, UserActionTypes } from '../../types/user'

const defaultUserState: User = {
  publications: [],
  name: '',
  avatar: require('../../images/avatar.png'),
  biography: '',
  login: '',
  subscribers: [],
  subscriptions: [],
  messages: [],
  status: '',
  email: '',
  website: '',
  loggedIn: false,
  _id: ''
}

export const userReducer = (state = defaultUserState, action: UserActions): User => {
  switch(action.type) {
    // case UserActionTypes.SET_LIKE:
    //   return {...state, publications: [action.payload, ...state.publications]}
    case UserActionTypes.SET_LOGGED_IN:
      return {...state, loggedIn: action.payload}
    case UserActionTypes.SET_USER_INFO:
      return {...state, name: action.payload.name, email: action.payload.email, _id: action.payload._id, login: action.payload.login}
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