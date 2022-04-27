import avatar from '../../images/me.jpeg'
import { fotoObj1, fotoObj2, fotoObj3, fotoObj4, fotoObj5, fotoObj6, fotoObj7 } from '../../constants/fotos'

import { User, UserActions, UserActionTypes } from '../../types/user'

const defaultUserState: User = {
  publications: [fotoObj1, fotoObj2, fotoObj3, fotoObj4, fotoObj5, fotoObj6, fotoObj7],
  name: 'Nikita',
  avatar: require('../../images/me.jpeg'),
  biography: 'Developer',
  login: 'acid3602',
  subscribers: [],
  subscriptions: [],
  messages: [],
  status: 'Working',
  email: 'acid3602@mail.ru',
  website: 'github.com'
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