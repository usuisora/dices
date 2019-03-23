import { GET_PUTBILLS, POST_PUTBILL } from "../actions/types";

const initialState = {
   putbill: [
       {id:1, status :'put', money: '12',date: '21.12.12' },
       {id:1, status :'withdraw', money: '23',date: '21.12.12' }
]
}

export default function(state = initialState,action){
    switch(action.type){
        case(GET_PUTBILLS):{
            return{
                    ...state
            }
        }
        // case(POST_PUTBILL):{

        // }
        default:{
            return{
                ...state
        }
        }
    }
    }