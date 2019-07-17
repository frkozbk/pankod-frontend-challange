import {FETCH_JSON_FEED} from '../actions/types'

const initialState={}

export default (state=initialState,action) => {
    
    switch (action.type) {
        case FETCH_JSON_FEED:
            return {
                ...state,
                entries:[...action.payload.entries]
            }
        
        default:
            return state;
    }
    
}