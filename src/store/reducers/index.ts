import { combineReducers } from 'redux';
import { appReducer } from './appReducer';
import { publicationReducer } from './publicationReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
  user: userReducer,
  app: appReducer,
  publication: publicationReducer
})

export type RootState = ReturnType<typeof rootReducer>