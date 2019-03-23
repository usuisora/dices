import { GET_BATTLES, POST_OPEN_BATTLE, POST_CLOSED_BATTLE,POST_SEC_PLAYER, GET_SEC_PLAYER } from "../actions/types";

const initialState = {
    openBattles: [
        {id:123, name: 'Spange', bill:20},
        {id:342, name: 'Ronny', bill:21}
    ],
    closedBattles:[
        {id:1, secPLayerID : 123, status: 'lose', money: 20, date: new Date()}

      ],
      secPlayer:{id : 1212,name :'none', bill:78}
}


export default function(state = initialState,action){
    switch(action.type){
       case(GET_BATTLES):{
           return{
               ...state
           }
       }
       case(POST_SEC_PLAYER):{

        var secPlayer = state.openBattles.find(el =>{
            return el.id == action.payload
        })
           return{
               ...state,
               secPlayer
           }
       }
       case(GET_SEC_PLAYER):{
        return{
            ...state
        }
       }
       case(POST_OPEN_BATTLE):{
           return {
               ...state,
               openBattles : [...state.openBattles ,action.payload]
           }
       }
    //    case(POST_OPEN_BATTLE):{
    //     return {
    //         ...state,
    //         postBattles : [...state.openBattles ,action.payload]
    //     }}
    
    // case(POST_CLOSED_BATTLE):{

    // }

        default:{
            return{
                ...state
        }
        }
    }
    }