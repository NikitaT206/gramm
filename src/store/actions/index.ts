/* eslint-disable import/no-anonymous-default-export */
import * as appActions from './app'
import * as userActions from './user'
import * as publicationActions from './publication'

export default {
  ...appActions,
  ...userActions,
  ...publicationActions
}