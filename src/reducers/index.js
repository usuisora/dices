import {combineReducers} from 'redux'
import gameReducer from './gameReducer'
import battleReducer from './battleReducer'
import putbillReducer from './putbillReducer'
import playerReducer from './playerReducer'
// import putbillReducer from './putbill'

export default combineReducers({

    game: gameReducer,
    battle :  battleReducer,
    putbill : putbillReducer,
    player : playerReducer
})