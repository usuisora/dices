import { GET_ME } from "../actions/types";

const initialState ={
    mydata: 
        {id : 1, name: 'ronny',email:'ronny@gmail.com', accountMoney: 122 ,password:'0000'  },
}

export default function(state = initialState,action){
    switch(action.type){
        case(GET_ME):{
            return{
                    ...state
            }
        }
        default:{
            return{
                ...state
        }
        }
    }
    }