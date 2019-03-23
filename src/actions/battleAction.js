import { GET_BATTLES, POST_OPEN_BATTLE, POST_CLOSED_BATTLE, GET_SEC_PLAYER, POST_SEC_PLAYER } from "../actions/types";
export const getBattles = () =>{
    return{
        type: GET_BATTLES
    }
}

export const postOpenBattle = (payload) =>{
    return{
            type : POST_OPEN_BATTLE,
            payload
    }
}

export const postClosedBattle = (payload) =>{
    return{
            type : POST_OPEN_BATTLE,
            payload 
    }
}

export const postSecPlayer = (payload) =>{
    return{
            type : POST_SEC_PLAYER,
            payload
    }
}

export const getSecPlayer = () =>{
    return{
            type: GET_SEC_PLAYER
    }
}
