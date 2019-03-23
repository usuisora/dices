import {GET_GAME,POST_CLOSED_BATTLE} from '../actions/types'

const initialState ={
    u:{
        id:1,
        name:'USUI',
        dice1: 0,
        dice2: 0
    },
    user:{
        id:'RADDY',
        name: '',
        dice1: 0,
        dice2: 0
    }
}

export default function(state = initialState,action){
switch(action.type){


    default :{
        return {
            ...state
        }
    }

}
}