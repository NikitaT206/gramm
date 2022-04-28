import { User, UserActions, UserActionTypes } from '../../types/user'

const defaultUserState: User = {
  publications: [],
  name: 'Nikita',
  avatar: require('../../images/me.jpeg'),
  biography: 'Developer',
  login: 'acid3602',
  subscribers: [],
  subscriptions: [],
  messages: [],
  status: 'Working',
  email: 'acid3602@mail.ru',
  website: 'github.com',
  id: 1
}

export const userReducer = (state = defaultUserState, action: UserActions): User => {
  switch(action.type) {
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