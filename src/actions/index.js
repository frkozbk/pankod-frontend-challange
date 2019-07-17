import {FETCH_JSON_FEED} from './types'

export const fetchJsonFeed = () =>async(dispatch) => {
    const jsonFeed = await import ("../sample.json");
    dispatch({
        type:FETCH_JSON_FEED,
        payload:jsonFeed.default
    })
}
