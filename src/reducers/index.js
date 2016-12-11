import {combineReducers} from 'redux'
import noteBaseState from './noteBaseState'
import noteReducer from './note-reducer'

const reducers = combineReducers({
    notes: noteReducer
})

export default reducers