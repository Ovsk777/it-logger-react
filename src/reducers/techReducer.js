import { GET_TECHS, ADD_TECH, DELETE_TECH, SET_LOADING, TECHS_ERROR } from '../actions/types'

const initialTechState = {
    techs: null,
    loading: false,
    error: null
}

export default (state = initialTechState, action)=> {
    switch(action.type){
        case GET_TECHS:
            return{
                ...state,
                techs: action.payload,
                loading: false
            }

        case SET_LOADING:
            return{
                ...state,
                loading: true
            }    
        default:
        return state;
    }
}
