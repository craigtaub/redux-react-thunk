import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import async from './async'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  async
})

export default todoApp
